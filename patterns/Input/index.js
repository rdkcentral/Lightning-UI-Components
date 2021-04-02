import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import Icon from '../../elements/Icon';
import InlineContent from '../../layout/InlineContent';

export const styles = theme => ({
  h: 64,
  background: theme.palette.background.float,
  shadow: theme.materials.glow,
  underline: {
    color: theme.palette.grey[5],
    weight: 4
  },
  cursor: {
    color: theme.palette.grey[5],
    blink: true,
    width: 4
  },
  iconProperties: {
    height: 32,
    width: 32,
    color: theme.palette.grey[5],
    focusColor: theme.palette.grey[90]
  },
  padding: {
    left: theme.spacing(2)
  },
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button1,
    textColor: theme.palette.grey[5]
  },
  label: {
    ...theme.typography.callout1,
    textColor: theme.palette.grey[5]
  },
  caption: {
    ...theme.typography.caption,
    textColor: theme.palette.text.light.tertiary
  },
  captionIcon: {
    width: 24,
    height: 24
  },
  focused: {
    background: { color: theme.palette.background.focus },
    text: { color: theme.palette.text.dark.primary },
    cursor: { color: theme.palette.text.dark.primary }
  }
});
class Input extends lng.Component {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      background: this.styles.background,
      placeholder: '',
      position: 0,
      radius: this.styles.radius,
      value: '',
      Label: {
        text: {
          ...this.styles.label,
          text: 'LABEL'
        }
      },
      Container: {
        y: this.styles.label.lineHeight + 16,
        color: this.styles.background,
        zIndex: 2,
        texture: lng.Tools.getRoundRect(
          this.styles.w,
          this.styles.h,
          this.styles.radius
        ),
        ContentWrapper: {
          clipping: true,
          x: this.styles.padding.left,
          y: 8,
          w: w => w,
          h: this.styles.text.lineHeight + 12,
          // TODO: need design input on cursor
          Cursor: {
            w: this.styles.cursor.width,
            h: this.styles.text.lineHeight,
            y: 8,
            color: this.styles.cursor.color,
            rect: true,
            alpha: 0.0001,
            zIndex: 1
          },
          Content: {
            text: {
              ...this.styles.text,
              text: '',
              zIndex: 1
            }
          },
          /**
           * Hidden value is used for measuring where the cursor should
           * be positioned when a user changes the cursor position. Since
           * the text is one texture we don't know the exact position of each
           * individual character, so we render a substring version of the text
           * to determine the renderwidth and position the cursor based on that number
           */
          HiddenContent: {
            alpha: 0.00001,
            text: {
              ...this.styles.text,
              text: '',
              textColor: 0xffffffff
            }
          }
        }
      },
      Icon: {
        type: Icon,
        y: this.styles.label.lineHeight + 32,
        zIndex: 2
      },
      Underline: {
        color: this.styles.underline.color,
        y: this.styles.label.lineHeight + 16 + this.styles.text.lineHeight + 24
      },
      Caption: {
        type: InlineContent,
        textProperties: this.styles.caption,
        x: this.styles.padding.left,
        y:
          this.styles.label.lineHeight +
          16 +
          this.styles.text.lineHeight +
          24 +
          this.styles.underline.weight +
          16,
        iconH: this.styles.captionIcon.height,
        iconW: this.styles.captionIcon.width
      },
      DropShadow: {
        alpha: 0,
        ...this.styles.shadow({
          w: this.styles.w,
          h: this.styles.h
        })
      }
    };
  }

  _construct() {
    this._value = '';
    this._position = 0;
    this._w = this.constructor.styles.w;
    this._h = this.constructor.styles.h;
    this._radius = this.constructor.styles.radius;
    this._focused = false;
    this._mask = '•';
    this._password = false;
    this._iconHeight = this.styles.iconProperties.height;
    this._iconWidth = this.styles.iconProperties.width;
    this._iconColor = this.styles.iconProperties.color;
    this._iconFocusColor = this.styles.iconProperties.focusColor;
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
  }

  _init() {
    this.listening = false;
    if (this.styles.cursor && this.styles.cursor.blink) {
      this._cursorBlink = this._Cursor.animation({
        duration: 1.5,
        repeat: -1,
        actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
      });
    }
    this._update();
  }

  clear() {
    if (this._listening) {
      this.value = '';
      this.position = 0;
    }
  }

  insert(value) {
    if (this._listening) {
      this.value =
        this.value.slice(0, this.position) +
        value +
        this.value.slice(this.position);
      this.position += value.length;
    }
  }

  backspace() {
    if (this._listening) {
      if (this.position === this.value.length) {
        this.value = this.value.slice(0, -1);
      } else if (this.position > 0) {
        this.value =
          this.value.slice(0, this.position - 1) +
          this.value.slice(this.position);
      }
      this.position--;
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateIcon();
      this._updateContainer();
      this._updateUnderline();
      this._updateState();
      this._updateDropShadow();
    });
  }

  _updateIcon() {
    const alpha = this.icon ? 0.64 : 0;
    this._Icon.patch({
      x: this.w - (this._iconWidth + this.styles.padding.left),
      h: this._iconHeight,
      w: this._iconWidth,
      icon: this._icon,
      color: this._focused ? this.iconFocusColor : this.iconColor
    });
    if (this._smooth) {
      this._Icon.smooth = { alpha };
    } else {
      this._Icon.alpha = alpha;
    }

    this._ContentWrapper.w =
      (this.icon ? this._Icon.x : this.w) - this.styles.padding.left * 2;
  }

  _updateUnderline() {
    if (this._Underline) {
      this._Underline.patch({
        texture: lng.Tools.getRoundRect(
          this.w,
          this.styles.underline.weight,
          this.styles.underline.weight / 2
        )
      });
      this._Underline.w = this.w;
    }
  }

  _updateContainer() {
    if (this._Container) {
      const text =
        (this.password ? this.mask.repeat(this.value.length) : this.value) ||
        this.placeholder;
      this._Container.patch({
        texture: lng.Tools.getRoundRect(this.w, this.h, this.radius),
        ContentWrapper: {
          Cursor: {
            x: this._getCursorX()
          },
          Content: {
            text: { text }
          }
        }
      });
    }
  }

  _updateState() {
    if (this._focused) {
      if (this._cursorBlink && !this._cursorBlink.isPlaying())
        this._cursorBlink.start();
      this._Label.smooth = { alpha: 1 };
      this._Container.smooth = {
        alpha: 1,
        color: this.styles.focused.background.color
      };
      this._Content.smooth = { color: this.styles.focused.text.color };
      this._Underline.smooth = { alpha: 0 };
      this._Cursor.smooth = {
        alpha: 1,
        color: this.styles.focused.cursor.color
      };
    } else {
      this._Label.smooth = { alpha: 0.64 };
      this._Container.smooth = {
        alpha: this._listening ? 1 : 0.64,
        color: this.styles.background
      };
      this._Content.smooth = { color: this.styles.text.textColor };
      this._Underline.smooth = { alpha: this._listening ? 1 : 0.64 };
      this._Cursor.smooth = {
        alpha: this._listening ? 1 : 0,
        color: this.styles.cursor.color
      };
      if (this._cursorBlink)
        this._listening ? this._cursorBlink.start() : this._cursorBlink.stop();
    }
  }

  _updateDropShadow() {
    if (this.w !== this.styles.w) {
      const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
      this._DropShadow.patch(DropShadow);
      this._DropShadow.y = 92;
    }
    const alpha = Number(this._focused);
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
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

  _handleLeft() {
    const { position } = this;
    if (position > 0) {
      this.position--;
      return true;
    }
    return false;
  }

  _handleRight() {
    const { position, value } = this;
    if (position < value.length) {
      this.position++;
      return true;
    }
    return false;
  }

  _getCursorX() {
    const { value, position, password, mask } = this;
    const text = password
      ? mask.repeat(value.length).substring(0, position)
      : value.substring(0, position);

    // update hidden value and calc width
    this._HiddenContent.text.text = text;
    this._HiddenContent.loadTexture();
    return this._HiddenContent.renderWidth;
  }

  get icon() {
    return this._icon;
  }
  set icon(icon) {
    if (icon !== this.icon) {
      this._icon = icon;
      this._update();
    }
  }

  get iconColor() {
    return this._iconColor;
  }
  set iconColor(iconColor) {
    if (iconColor !== this.iconColor) {
      this._iconColor = iconColor;
      this._update();
    }
  }

  get iconFocusColor() {
    return this._iconFocusColor;
  }
  set iconFocusColor(iconFocusColor) {
    if (iconFocusColor !== this.iconFocusColor) {
      this._iconFocusColor = iconFocusColor;
      this._update();
    }
  }

  set listening(listening) {
    this._listening = listening;
    this._update();
  }

  set label(label) {
    this._label = label.toUpperCase();
    this._Label.text = this._label;
  }

  get announce() {
    return this.password ? 'Input hidden' : this.value || this.placeholder;
  }

  get w() {
    return this._w;
  }

  set w(w) {
    if (w !== this.w) {
      this._w = w;
      this._update();
    }
  }

  set caption(caption) {
    this._Caption.content = caption;
  }

  get h() {
    return this._h;
  }

  set h(h) {
    if (h !== this.h) {
      this._h = h;
      this._update();
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    if (radius !== this.radius) {
      this._radius = radius;
      this._update();
    }
  }

  get position() {
    return this._position;
  }

  set position(position) {
    if (position >= 0 && position <= this.value.length) {
      this._position = position;
      this._update();
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this._update();
  }

  get mask() {
    return this._mask;
  }

  set mask(mask) {
    if (mask !== this._mask) {
      this._mask = mask.substring(0, 1);
      this._update();
    }
  }

  get password() {
    return this._password;
  }

  set password(password) {
    if (password !== this._password) {
      this._password = password;
      this._update();
    }
  }

  get _Container() {
    return this.tag('Container');
  }

  get _Label() {
    return this.tag('Label');
  }

  get _ContentWrapper() {
    return this._Container.tag('ContentWrapper');
  }

  get _Content() {
    return this._ContentWrapper.tag('Content');
  }

  get _Cursor() {
    return this._ContentWrapper.tag('Cursor');
  }

  get _HiddenContent() {
    return this._ContentWrapper.tag('HiddenContent');
  }

  get _DropShadow() {
    return this.tag('DropShadow');
  }

  get _Underline() {
    return this.tag('Underline');
  }

  get _Icon() {
    return this.tag('Icon');
  }

  get _Caption() {
    return this.tag('Caption');
  }
}

export default withStyles(Input, styles);
