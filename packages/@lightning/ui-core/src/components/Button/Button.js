import { measureTextWidth } from '../../utils/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Button.styles.js';
import Row from '../Row/index.js';
import Surface from '../Surface/index.js';
import TextBox from '../TextBox/index.js'; // There seams to be some issue with the circular dependency here

/**
 * Button Component
 *
 * Generic Button Component that handles setting text icon and checkbox
 */
class Button extends Surface {
  static get __componentName() {
    return 'Button';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['fixed', 'justify', 'prefix', 'suffix', 'title'];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      { name: 'TextWrapper', path: 'Content.TextWrapper' },
      { name: 'Title', path: 'Content.TextWrapper.Title' },
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
    this._updateTruncation();
  }

  _onTitleTextBoxChanged() {
    this._updateAllPositioning();
  }

  _updatePositions() {
    if (this._hasPrefix) {
      this._Prefix.x = this._prefixX;
    }
    if (this._hasTitle) {
      this._TextWrapper.x = this._titleX;
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
        textStyle: this.style.textStyle
      };
      if (!this._Title) {
        titlePatch = {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onTitleTextBoxChanged'
          },
          ...titlePatch
        };
      }
      this._Content.patch({
        TextWrapper: {
          mountY: 0.5,
          Title: titlePatch
        }
      });
    } else {
      this._Content.patch({ TextWrapper: { Title: undefined } });
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
        wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
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
      this.applySmooth(this._Content, contentDimensionsPatch);
    }
  }

  _updateContentPosition() {
    this._Content.patch(this._contentProps);
  }

  _updateSurfaceDimensions() {
    let newWidth = this.w;
    if (this.fixed) {
      newWidth = this._w;
    } else {
      // if no title, ignore minWidth and use prefix/suffix width
      // when the title is collapsed, width should be the same as if there is no title
      newWidth =
        (!this._hasTitle && (this._hasPrefix || this._hasSuffix)) ||
        (this._Title &&
          !this._Title.visible &&
          (this._hasPrefix || this._hasSuffix))
          ? this._contentW + this._paddingX
          : Math.max(this._contentW + this._paddingX, this.style.minWidth);
    }

    if (newWidth !== this.w) {
      this.w = newWidth;
    }
    // TODO breaks row resizing if this is wrapped in the above conditional
    this.fireAncestors('$itemChanged');
  }

  _addButtonProps(arr) {
    const items = Array.isArray(arr) ? arr : [arr];
    return items.map(item => ({
      ...this._buttonProps,
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

  get _contentProps() {
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
    return { mountX, x };
  }

  get _buttonProps() {
    return {
      centerInParent: true,
      palette: this.palette,
      mode: this.mode
    };
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
      return this._titleW + this._TextWrapper.x + this.style.titlePadding;
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

  get _totalTitlePaddingX() {
    let totalTitlePadding = 0;
    if (this._hasPrefix) {
      totalTitlePadding += this.style.titlePadding;
    }
    if (this._hasSuffix) {
      totalTitlePadding += this.style.titlePadding;
    }
    return totalTitlePadding;
  }

  /**
   * Button w must be >= nonTextSpace + smallest possible width of truncated
   * text(width of the first set of characters before a space + width of TextBox.maxLinesSuffix).
   * Disregarding this results in the contents of the button being a greater width than the
   * fixed w of the Button(w/o decreasing _paddingX or _totalTitlePadding).
   */
  get _fixedWordWrapWidth() {
    const { w, _paddingX, _prefixW, _suffixW, _totalTitlePaddingX } = this;
    const nonTextSpace = _paddingX + _prefixW + _suffixW + _totalTitlePaddingX;
    return Math.max(1, w - nonTextSpace);
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
    const announce = [];
    if (this.title) {
      announce.push(this.title);
    }
    announce.push(this._announceComponentName);
    if (this._hasPrefix && this._Prefix.items.length) {
      announce.push(...this._Prefix.items.map(item => item.announce));
    }
    if (this._hasSuffix && this._Suffix.items.length) {
      announce.push(...this._Suffix.items.map(item => item.announce));
    }

    return announce;
  }

  get _announceComponentName() {
    return Button.__componentName;
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
