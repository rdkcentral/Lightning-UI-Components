import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';

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
  padding: {
    left: theme.spacing(0)
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
        flex: {
          paddingLeft: this.styles.padding.left,
          alignContent: 'center'
        },
        color: this.styles.background,
        texture: lng.Tools.getRoundRect(
          this.styles.w,
          this.styles.h,
          this.styles.radius
        ),
        // TODO: need design input on cursor
        Cursor: {
          flexItem: {
            alignSelf: 'center',
            marginLeft: 8
          },
          w: this.styles.cursor.width,
          h: this.styles.text.lineHeight,
          color: this.styles.cursor.color,
          rect: true,
          alpha: 0.0001,
          zIndex: 1
        },
        Content: {
          flexItem: {
            alignSelf: 'center'
          },
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
      },
      Underline: {
        rect: true,
        color: this.styles.underline.color,
        h: this.styles.underline.weight,
        w: this.styles.w,
        y: this.styles.label.lineHeight + 16 + this.styles.text.lineHeight + 24
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
      this._updateContainer();
      this._updateUnderline();
      this._updateState();
      this._updateDropShadow();
    });
  }

  _updateUnderline() {
    const Underline = {};
    if (this._Underline) {
      Underline.w = this.w;
      this.patch({ Underline });
    }
  }

  _updateContainer() {
    const Container = {};
    let Cursor;
    let Content;

    if (this._Container) {
      Cursor = {
        x: this._getCursorX()
      };
      const text =
        (this.password ? this.mask.repeat(this.value.length) : this.value) ||
        this.placeholder;
      Content = {
        text: { text }
      };
      Container.texture = lng.Tools.getRoundRect(this.w, this.h, this.radius);

      Container.Content = Content;
      Container.Cursor = Cursor;
      this.patch({ Container });
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

  get _Content() {
    return this.tag('Container.Content');
  }

  get _Cursor() {
    return this.tag('Container.Cursor');
  }

  get _HiddenContent() {
    return this.tag('Container.HiddenContent');
  }

  get _DropShadow() {
    return this.tag('DropShadow');
  }

  get _Underline() {
    return this.tag('Underline');
  }
}

export default withStyles(Input, styles);
