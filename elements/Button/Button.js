/**
 * Button Component
 *
 * Generic Button Component that handles setting text icon and checkbox
 */
import { withExtensions } from '../../mixins';
import Surface from '../Surface';
import TextBox from '../TextBox';
import * as styles from './Button.styles';
import { measureTextWidth } from '../../utils';
import Row from '../../layout/Row';

class Button extends Surface {
  static get __componentName() {
    return 'Button';
  }

  static get __themeStyles() {
    return styles;
  }

  static get properties() {
    return ['fixed', 'justify', 'prefix', 'suffix', 'title'];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      { name: 'Title', path: 'Content.Title' },
      { name: 'Prefix', path: 'Content.Prefix' },
      { name: 'Suffix', path: 'Content.Suffix' }
    ];
  }

  static _template() {
    return {
      ...super._template(),
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2
      }
    };
  }

  _update() {
    this._updatePrefix();
    this._updateTitle();
    this._updateSuffix();
    this._updateAllPositioning();
    this._updateTruncation();
  }

  _updateAllPositioning() {
    this._updatePositions();
    this._updateContentDimensions();
    this._updateSurfaceDimensions();
    this._updateContentPosition();
    // delaying the super._update call so we update the surface sizing after the button has finished updating
    super._update();
  }

  $itemChanged() {
    this._updateAllPositioning();
  }

  _onTextBoxChanged() {
    this._updateAllPositioning();
  }

  _updatePositions() {
    if (this._hasPrefix) {
      this._Prefix.x = this._prefixX;
    }
    if (this._hasTitle) {
      this._Title.x = this._titleX;
    }
    if (this._hasSuffix) {
      this._Suffix.x = this._suffixX;
    }
  }

  _updatePrefix() {
    if (this.prefix) {
      let prefixPatch = {
        h: this.style.prefixH,
        itemSpacing: this.style.itemSpacing
      };
      if (!this._Prefix) {
        prefixPatch = {
          ...this._rowProps,
          ...prefixPatch
        };
      }
      this._Content.patch({ Prefix: prefixPatch });
      this._Prefix.items = this._addButtonProps(this.prefix);
    } else {
      this._Content.patch({ Prefix: undefined });
    }
  }

  _updateTitle() {
    if (this._hasTitle) {
      let titlePatch = {
        content: this.title,
        textStyle: {
          textColor: this.style.contentColor,
          ...this.style.textStyle
        }
      };
      if (!this._Title) {
        titlePatch = {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          },
          ...titlePatch
        };
      }
      this._Content.patch({ Title: titlePatch });
    } else {
      this.patch({ Content: { Title: undefined } });
    }
  }

  _updateSuffix() {
    if (this.suffix) {
      let suffixPatch = {
        h: this.style.suffixH,
        itemSpacing: this.style.itemSpacing
      };
      if (!this._Suffix) {
        suffixPatch = {
          ...this._rowProps,
          ...suffixPatch
        };
      }
      this._Content.patch({ Suffix: suffixPatch });
      this._Suffix.items = this._addButtonProps(this.suffix);
    } else {
      this._Content.patch({ Suffix: undefined });
    }
  }

  _updateTruncation() {
    /**
     * needs to run before rest of content updates to prevent a bug causing text
     * to sometimes truncate and then un-truncate(with no width change) when
     * toggling fixed after toggling focus
     */
    if (this._Title) {
      this._Title.patch({
        wordWrap: this.fixed,
        wordWrapWidth: this.fixed ? this.w - this._paddingX : 0
      });
    }
  }

  _updateContentDimensions() {
    const contentDimensionsPatch = {};
    const y = this.h / 2;

    // reference transition targets to ensure we aren't checking against intermittent values
    if (this._Content.transition('w').targetValue !== this._contentW) {
      contentDimensionsPatch.w = this._contentW;
    }

    if (this._Content.y !== y) {
      contentDimensionsPatch.y = y;
    }

    if (Object.keys(contentDimensionsPatch).length > 0) {
      if (this._smooth) {
        this._Content.smooth = contentDimensionsPatch;
      } else {
        this._Content.patch(contentDimensionsPatch);
      }
    }
  }

  _updateContentPosition() {
    let mountX;
    let x;

    switch (this.justify) {
      case 'left':
        mountX = 0;
        x = this._paddingLeft;
        break;
      case 'right':
        mountX = 1;
        x = this.w - this._paddingRight;
        break;
      case 'center':
      default:
        mountX = 0.5;
        x = this.w / 2;
        break;
    }

    this._Content.patch({ mountX, x });
  }

  _updateSurfaceDimensions() {
    let newWidth = this.w;
    if (this.fixed) {
      newWidth = this._w;
    } else {
      // if no title, ignore minWidth and use prefix/suffix width
      newWidth =
        !this._hasTitle && (this._hasPrefix || this._hasSuffix)
          ? this._contentW + this._paddingX
          : Math.max(this._contentW + this._paddingX, this.style.minWidth);
    }

    if (newWidth !== this.w) {
      this.w = newWidth;
      this.fireAncestors('$itemChanged');
    }
  }

  _addButtonProps(arr) {
    const items = Array.isArray(arr) ? arr : [arr];
    return items.map(item => ({
      centerInParent: true,
      palette: this.palette,
      mode: this.mode,
      ...item,
      style: {
        color: this.style.contentColor,
        ...item.style
      }
    }));
  }

  _getJustify() {
    return !!this._justify ? this._justify : this.style.justify;
  }

  get _hasPrefix() {
    return this._Prefix && Array.isArray(this.prefix)
      ? this.prefix.length
      : this.prefix;
  }

  get _prefixW() {
    return this._hasPrefix ? this._Prefix.w : 0;
  }

  get _prefixX() {
    return 0;
  }

  get _hasTitle() {
    return !!this.title;
  }

  get _titleW() {
    // get the pre-calculated text width of the title to solve some race condition bugs
    if (
      this._hasTitle &&
      this._Title &&
      this._Title._Text &&
      this._Title.visible
    ) {
      if (this.fixed) {
        return this._Title.w;
      } else {
        return measureTextWidth(this._Title._Text.text);
      }
    }
    return 0;
  }

  get _titleX() {
    return this._hasPrefix ? this._prefixW + this.style.titlePadding : 0;
  }

  get _hasSuffix() {
    return this._Suffix && Array.isArray(this.suffix)
      ? this.suffix.length
      : this.suffix;
  }

  get _suffixW() {
    return this._hasSuffix ? this._Suffix.w : 0;
  }

  get _suffixX() {
    if (this._hasTitle) {
      return this._titleW + this._Title.x + this.style.titlePadding;
    } else if (this._hasPrefix) {
      return this._prefixW + this.style.itemSpacing;
    }
    return 0;
  }

  get _contentW() {
    if (this._hasSuffix) {
      return this._suffixX + this._suffixW;
    } else if (this._hasTitle && this._Title.visible) {
      return this._titleX + this._titleW;
    } else if (this._hasPrefix) {
      return this._prefixX + this._prefixW;
    }
    return 0;
  }

  get _rowProps() {
    return {
      type: Row,
      mountY: 0.5,
      autoResizeWidth: true
    };
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this.title + ', Button';
  }

  get _paddingX() {
    return this._paddingLeft + this._paddingRight;
  }

  get _paddingLeft() {
    return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
  }

  get _paddingRight() {
    return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
  }
}

export default withExtensions(Button);
