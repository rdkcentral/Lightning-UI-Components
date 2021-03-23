/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from '@lightningjs/core';
import { RoundRect, measureTextWidth, getFirstNumber } from '../../utils';
import withStyles from '../../mixins/withStyles';
import withUpdates from '../../mixins/withUpdates';
import withHandleKey from '../../mixins/withHandleKey';
import Icon from '../Icon';

export const styles = {
  minWidth: 150,
  h: 40,
  radius: 0,
  background: { color: 0xff1f1f1f },
  icon: { color: 0xffffffff },
  text: {
    fontSize: 20,
    color: 0xffffffff
  },
  padding: 50,
  stroke: {
    color: 0x00,
    weight: 2
  },
  focused: {
    background: { color: 0xffffffff },
    text: { color: 0xff1f1f1f },
    icon: { color: 0xff1f1f1f }
  }
};

class Button extends withHandleKey(withUpdates(lng.Component)) {
  static get properties() {
    return [
      'fixed',
      'icon',
      'minWidth',
      'radius',
      'stroke',
      'strokeColor',
      'strokeWeight',
      'title'
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
    this._focused = false;
    this._minWidth = 0;
    this._strokeWeight = 2;
    this._strokeColor = 0x00;
    super._construct && super._construct();
  }

  _init() {
    this._Icon &&
      this._Icon.on('txError', () => {
        this.icon.src = null;
        this._update();
      });
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._focused = true;
    this._update();
  }

  _unfocus() {
    this._focused = false;
    this._update();
  }

  _updateColor() {
    const color = this._focused
      ? getFirstNumber(
          this.focusedBackground,
          this.styles.focused.background.color
        )
      : getFirstNumber(this.background, this.styles.background.color);
    if (this._smooth) {
      this.smooth = { color };
    } else {
      this.color = color;
    }
  }

  _updateTitle() {
    if (this.title) {
      this._Title.text = {
        ...this.styles.text,
        fontColor: this.styles.text.color,
        fontSize: this.fontSize || this.styles.text.fontSize,
        fontFamily:
          this.styles.text.fontFace ||
          this.styles.text.fontFamily ||
          this.stage._options.defaultFontFace,
        text: this.title
      };

      const color = this._focused
        ? getFirstNumber(this.focusedTextColor, this.styles.focused.text.color)
        : getFirstNumber(this.textColor, this.styles.text.color);
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
      this._Content.patch({
        Icon: {
          type: Icon,
          w: size,
          h: size,
          icon: src,
          visible: 1,
          flexItem: { marginRight: this.title ? spacing : 0 }
        }
      });

      const iconColor = this._focused
        ? getFirstNumber(this.focusedIconColor, this.styles.focused.icon.color)
        : getFirstNumber(color, this.styles.icon.color);
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
    if (this.stroke && !this._focused) {
      const radius = this.radius || this.styles.radius;

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
      const radius = this.radius || this.styles.radius;
      this.texture = lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        radius
      );
      this._Stroke.texture = false;
    }
  }

  _updateWidth() {
    if (!this.fixed) {
      const iconSize =
        this.icon && this.icon.src ? this.icon.size + this.icon.spacing : 0;
      const padding = getFirstNumber(this.padding, this.styles.padding, 10);
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

  set label(label) {
    this._label = label;
  }

  get label() {
    return this._label || this._title;
  }

  get announce() {
    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this.label + ', Button';
  }

  get _Content() {
    return this.tag('Content');
  }

  get _Title() {
    return this.tag('Content.Title');
  }
  get _Icon() {
    return this.tag('Content.Icon');
  }
  get _Stroke() {
    return this.tag('Stroke');
  }
}

export default withStyles(Button, styles);
