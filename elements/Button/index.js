/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from '@lightningjs/core';
import { RoundRect, measureTextWidth, getFirstNumber } from '../../utils';
import withStyles from '../../mixins/withStyles';
import Icon from '../Icon';
import Base from '../Base';
import styles from './Button.styles';

export default class Button extends withStyles(Base, styles) {
  static get properties() {
    return [
      'fixed',
      'icon',
      'label',
      'minWidth',
      'radius',
      'stroke',
      'strokeColor',
      'strokeWeight',
      'title'
    ];
  }

  static get tags() {
    return [
      'Content',
      {
        name: 'Title',
        path: 'Content.Title'
      },
      {
        name: 'Icon',
        path: 'Content.Icon'
      },
      'Stroke'
    ];
  }

  static _template() {
    return {
      w: this.styles.w || 0,
      minWidth: this.styles.minWidth,
      h: this.styles.h,
      radius: this.styles.radius,
      strokeColor: this.styles.stroke.color,
      strokeWeight: this.styles.stroke.weight,
      Content: {
        mount: 0.5,
        zIndex: 2,
        x: w => w / 2,
        y: h => h / 2,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center'
        },
        // TODO: Wonky lineHeight / fontsize from Lightning
        // Move title down 2 pixels to _visually_ center it
        // inside the button
        Title: { y: 2 }
      },
      Stroke: {
        zIndex: 1,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2
      }
    };
  }

  _construct() {
    this._fixed = false;
    this._minWidth = 0;
    this._strokeWeight = 2;
    this._strokeColor = 0x00;
    this._focusedBackgroundColor = this.styles.focused.background.color;
    this._backgroundColor = this.styles.background.color;
    this._textStyles = this.styles.text;
    this._stylesRadius = this.styles.radius;
    this._padding = this.styles.padding;
    this._fixedTextStyles = this.styles.fixedText;
    this._iconColorFocused = this.styles.focused.icon.color;
    this._iconStyles = this.styles.icon;
    this._textColorFocused = this.styles.focused.text.color;
    super._construct && super._construct();
  }

  _init() {
    this._setIconError();
  }

  _setIconError() {
    this._Icon &&
      this._Icon.on('txError', () => {
        this.icon.src = null;
        this._update();
      });
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  _updateColor() {
    const color = this.hasFocus()
      ? getFirstNumber(this.focusedBackground, this._focusedBackgroundColor)
      : getFirstNumber(this.background, this._backgroundColor);
    if (this._smooth) {
      this.smooth = { color };
    } else {
      this.color = color;
    }
  }

  _updateTitle() {
    if (this.title) {
      this._Title.text = {
        ...this._textStyles,
        fontColor: this._textStyles.color,
        fontSize: this.fontSize || this._textStyles.fontSize,
        fontFamily:
          this._textStyles.fontFace ||
          this._textStyles.fontFamily ||
          this.stage._options.defaultFontFace,
        text: this.title
      };

      const color = this.hasFocus()
        ? getFirstNumber(this.focusedTextColor, this._textColorFocused)
        : getFirstNumber(this.textColor, this._textStyles.color);
      if (this._smooth) {
        this._Title.smooth = { color };
      } else {
        this._Title.color = color;
      }
    } else {
      this._Title.texture = false;
    }
  }

  _updateIcon() {
    if (this.icon && this.icon.src) {
      const { color, size, spacing, src } = this.icon;
      if (this._Icon) {
        this._Icon.patch({
          w: size,
          h: size,
          icon: src,
          visible: 1,
          flexItem: { marginRight: !this._fixed && this.title ? spacing : 0 }
        });
      } else {
        this._Content.childList.addAt(
          this.stage.c({
            ref: 'Icon',
            type: Icon,
            w: size,
            h: size,
            icon: src,
            visible: 1,
            flexItem: { marginRight: !this._fixed && this.title ? spacing : 0 }
          }),
          0
        );
        this._setIconError();
      }

      const iconColor = this.hasFocus()
        ? getFirstNumber(this.focusedIconColor, this._iconColorFocused)
        : getFirstNumber(color, this._iconStyles.color);
      if (this._smooth) {
        this._Icon.smooth = { color: iconColor };
      } else {
        this._Icon.color = iconColor;
      }
    } else {
      this._Icon &&
        this._Icon.patch({
          w: 0,
          h: 0,
          visible: 0,
          texture: false,
          flexItem: false
        });
    }
  }

  _updateStroke() {
    if (this.stroke && !this.hasFocus()) {
      const radius = this.radius || this._stylesRadius;

      this.texture = lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        radius,
        0x00,
        true,
        0xffffffff
      );

      this._Stroke.color = this.strokeColor;
      this._Stroke.texture = lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        radius,
        this.strokeWeight,
        0xffffffff,
        true,
        this.background
      );
    } else {
      const radius = this.radius || this._stylesRadius;
      this.texture = lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        radius
      );
      this._Stroke.texture = false;
    }
  }

  _updateWidth() {
    const iconSize =
      this.icon && this.icon.src ? this.icon.size + this.icon.spacing : 0;
    const padding = getFirstNumber(this.padding, this._padding, 10);

    if (this.fixed) {
      this._Title.patch({
        text: {
          ...this._fixedTextStyles,
          wordWrapWidth: this.w - padding * 2 - iconSize
        }
      });
    } else {
      const w =
        measureTextWidth(this._Title.text || {}) + padding * 2 + iconSize;

      if (w && w > this.minWidth) {
        this.w = w;
        this.fireAncestors('$itemChanged');
        this.signal('buttonWidthChanged', { w: this.w });
      } else {
        this._w = this.w;
      }
    }
  }

  _update() {
    if (this._readyForUpdates) {
      this._updateColor();
      this._updateTitle();
      this._updateIcon();
      this._updateStroke();
      this._updateWidth();
    }
  }

  _setIcon({ src, size = 20, spacing = 5, color = 0xffffffff }) {
    return src ? { src, size, spacing, color } : null;
  }

  _getLabel() {
    return this._label || this._title;
  }

  get w() {
    if (this.fixed) return this._w;
    return this.minWidth > this._w ? this.minWidth : this._w;
  }

  set w(w) {
    if (this._w !== w) {
      this._w = w;
      this._update();
    }
  }
  set announce(announce) {
    super._announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this.label + ', Button';
  }
}
