/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from 'wpe-lightning';
import { RoundRect, measureTextWidth, getFirstNumber } from '../../utils';
import withStyles from '../../mixins/withStyles';
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

class Button extends lng.Component {
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
        x: w => w / 2,
        y: h => h / 2,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center'
        },
        Icon: {
          type: Icon
        },
        // TODO: Wonky lineHeight / fontsize from Lightning
        // Move title down 2 pixels to _visually_ center it
        // inside the button
        Title: { y: 2 }
      },
      Stroke: {
        zIndex: -1,
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
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
    this._strokeWeight = 2;
    this._strokeColor = 0x00;
  }

  _init() {
    this._update();
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
    if (this.icon) {
      const { color, size, spacing, src } = this.icon;
      this._Icon.patch({
        w: size,
        h: size,
        icon: src,
        flexItem: { marginRight: this.title ? spacing : 0 }
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
      this._Icon.patch({
        w: 0,
        h: 0,
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
      const iconSize = this._icon ? this._icon.size + this._icon.spacing : 0;
      const padding = getFirstNumber(this.padding, this.styles.padding, 10);
      const w =
        measureTextWidth(this._Title.text || {}) + padding * 2 + iconSize;

      if (w && w > this.minWidth) {
        this.w = w;
        this.fireAncestors('$itemChanged');
        this.signal('buttonWidthChanged', { w: this.w });
      }
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateColor();
      this._updateTitle();
      this._updateIcon();
      this._updateStroke();
      this._updateWidth();
    });
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  get fixed() {
    return this._fixed;
  }

  set fixed(fixed) {
    if (this._fixed !== fixed) {
      this._fixed = fixed;
      this._update();
    }
  }

  get minWidth() {
    return this._minWidth;
  }

  set minWidth(minWidth) {
    if (this._minWidth !== minWidth) {
      this._minWidth = minWidth;
      this._update();
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    if (this._radius !== radius) {
      this._radius = radius;
      this._update();
    }
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (this._title !== title) {
      this._title = title;
      this._update();
    }
  }

  get icon() {
    return this._icon;
  }

  set icon({ src, size = 20, spacing = 5, color = 0xffffffff }) {
    if (src) {
      this._icon = { src, size, spacing, color };
    } else {
      this._icon = null;
    }
    this._update();
  }

  get strokeWeight() {
    return this._strokeWeight;
  }

  set strokeWeight(strokeWeight) {
    if (this._strokeWeight !== strokeWeight) {
      this._strokeWeight = strokeWeight;
      this._update();
    }
  }

  get strokeColor() {
    return this._strokeColor;
  }

  set strokeColor(strokeColor) {
    if (this._strokeColor !== strokeColor) {
      this._strokeColor = strokeColor;
      this._update();
    }
  }

  get stroke() {
    return this._stroke;
  }

  set stroke(stroke) {
    if (this._stroke !== stroke) {
      this._stroke = stroke;
      this._update();
    }
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
