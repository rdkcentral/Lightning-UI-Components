/**
 * Button Component
 *
 * Generic Button Component that handles setting text icon and checkbox
 */
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import context from '../../context';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import Surface from '../Surface';
import TextBox from '../TextBox';
import styles from './Button.styles';
import { measureTextWidth } from '../../utils';

class Button extends Surface {
  static get __componentName() {
    return 'Button';
  }

  static get properties() {
    return [
      'disabled',
      'checkbox',
      'fixed',
      'icon',
      'justify',
      'prefixStyle',
      'title'
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      { name: 'Title', path: 'Content.Title' },
      { name: 'Prefix', path: 'Content.Prefix' },
      { name: 'Checkbox', path: 'Prefix.Checkbox' },
      { name: 'Icon', path: 'Prefix.Icon' }
    ];
  }

  static _template() {
    return {
      ...super._template(),
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        Title: {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          }
        }
      }
    };
  }

  _update() {
    this._updateTruncation();
    this._updatePrefix();
    this._updateTitle();
    this._updateContentDimensions();
    this._updateSurface();
    this._updateLayout();
    this._updateContentPosition();
    // delaying the super._update call so we update the surface sizing after the button has finished updating
    super._update();
  }

  _onTextBoxChanged() {
    this._updateContentDimensions();
    this._updateSurface();
    this._updateLayout();
    this._updateContentPosition();
    super._update();
  }

  _updatePrefix() {
    if (this._hasIcon && this._hasCheckbox) {
      context.log(
        'Warning: Button component does not support usage of both a checkbox and an icon.'
      );
    }
    if (this._hasIcon || this._hasCheckbox) {
      if (!this._Prefix) {
        this._Content.patch({ Prefix: {} });
      }

      this._updateIcon();
      this._updateCheckbox();
      const { w, h } = this.prefixStyle;
      this._Prefix.patch({ w, h });
    } else if (this._Prefix) {
      this._Content.patch({ Prefix: undefined });
    }
  }

  _updateIcon() {
    if (this._hasIcon) {
      if (!this._Icon) {
        this._Prefix.patch({
          Icon: { type: Icon }
        });
      }

      this._Icon.patch({
        icon: this.icon,
        x: 0,
        y: this._componentStyles.fontOffsetY,
        variant: this.variant,
        style: {
          ...this.prefixStyle,
          color: this._iconColor
        }
      });
    } else {
      this._Prefix.patch({ Icon: undefined });
    }
  }

  _updateCheckbox() {
    if (this._hasCheckbox) {
      if (!this._Checkbox) {
        this._Prefix.patch({
          Checkbox: {
            type: this._checkboxType,
            y: this._componentStyles.fontOffsetY
          }
        });
      }

      this._Checkbox.patch({
        variant: this.variant,
        ...this.checkbox,
        style: this.prefixStyle
      });
    } else {
      this._Prefix.patch({ Checkbox: undefined });
    }
  }

  _updateTitle() {
    const titlePatch = {
      x: this._prefixW,
      content: this.title,
      textStyle: this._componentStyles.textStyle,
      textColor: this._titleColor,
      maxLines: 1
    };

    this._Title.patch(titlePatch);
  }

  _updateTruncation() {
    /**
     * needs to run before rest of content updates to prevent a bug causing text
     * to sometimes truncate and then un-truncate(with no width change) when
     * toggling fixed after toggling focus
     */
    this._Title.patch({
      wordWrap: this.fixed,
      wordWrapWidth: this.fixed
        ? this.w - this._componentStyles.paddingX * 2
        : 0
    });
  }

  _updateContentDimensions() {
    const contentDimensionsPatch = {};
    const h = Math.max(this._hasPrefix ? this._Prefix.h : 0, this._Title.h);

    const w =
      (this._hasTitle ? this._measuredTitleW : 0) +
      (this._hasPrefix ? this._prefixW : 0);

    const y = this.h / 2;

    // reference transition targets to ensure we aren't checking against intermittent values
    if (this._Content.transition('w').targetValue !== w) {
      contentDimensionsPatch.w = w;
    }

    if (this._Content.transition('h').targetValue !== h) {
      contentDimensionsPatch.h = h;
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
        x = this._componentStyles.paddingX;
        break;
      case 'right':
        mountX = 1;
        x = this.w - this._componentStyles.paddingX;
        break;
      case 'center':
      default:
        mountX = 0.5;
        x = this.w / 2;
        break;
    }

    this._Content.patch({
      mountX,
      x
    });
  }

  _updateSurface() {
    if (this.fixed) {
      this.w = this._w;
    } else {
      const contentWidth = this._measuredTitleW + this._prefixW;
      const w =
        this._hasPrefix && !this._hasTitle
          ? contentWidth + this._paddingX
          : Math.max(
              contentWidth + this._paddingX,
              this._componentStyles.minWidth
            );
      this.w = w;
    }
  }

  get w() {
    return this._w;
  }

  set w(v) {
    if (typeof v !== 'undefined') {
      this._w = v;
    }
  }

  _getJustify() {
    return !!this._justify ? this._justify : this._componentStyles.justify;
  }

  _getPrefixStyle() {
    return !!this._prefixStyle
      ? this._prefixStyle
      : this._componentStyles.prefixStyle;
  }

  get _checkboxType() {
    // override this to change the type of checkbox in extended classes (ie. CheckboxSmall)
    return Checkbox;
  }

  get _prefixW() {
    return this._hasPrefix
      ? this._hasTitle
        ? this.prefixStyle.w + this._componentStyles.prefixMargin
        : this.prefixStyle.w
      : 0;
  }

  get _measuredTitleW() {
    // get the pre-calculated text width of the title to solve some race condition bugs
    if (this.fixed) {
      return this._Title.w;
    } else {
      return measureTextWidth(this._Title._Text.text);
    }
  }

  get _titleColor() {
    return this.disabled
      ? this._componentStyles.textColorDisabled
      : this.hasFocus()
      ? this._componentStyles.textColorFocused
      : this._componentStyles.textColorUnfocused;
  }

  get _iconColor() {
    return this.disabled
      ? this._componentStyles.textColorDisabled
      : this.hasFocus()
      ? this.prefixStyle.colorFocused
      : this.prefixStyle.color;
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
    return this._hasTitle
      ? this._componentStyles.paddingX * 2
      : this._componentStyles.paddingXIcon * 2;
  }

  get _hasTitle() {
    return !!this.title;
  }

  get _hasPrefix() {
    return !!(this._hasIcon || this._hasCheckbox);
  }

  get _hasIcon() {
    return !!this.icon;
  }

  get _hasCheckbox() {
    return !!this.checkbox;
  }
}

export default withExtensions(withStyles(Button, styles));
