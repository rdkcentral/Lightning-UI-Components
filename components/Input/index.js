import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  w: 808,
  h: 64,
  background: theme.palette.background.fill,
  padding: {
    left: theme.spacing(2)
  },
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.headline1,
    textColor: theme.palette.text.light.tertiary
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
      Container: {
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
            alignSelf: 'center'
          },
          w: 2,
          h: 40,
          color: 0xffffffff,
          rect: true,
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
      }
    };
  }

  _construct() {
    this._value = '';
    this._position = 0;
    this._w = this.constructor.styles.w;
    this._h = this.constructor.styles.h;
    this._radius = this.constructor.styles.radius;
  }

  _init() {
    this._update();
  }

  clear() {
    this.value = '';
    this.position = 0;
  }

  insert(value) {
    this.value =
      this.value.slice(0, this.position) +
      value +
      this.value.slice(this.position);
    this.position += value.length;
  }

  backspace() {
    if (this.position === this.value.length) {
      this.value = this.value.slice(0, -1);
    } else if (this.position > 0) {
      this.value =
        this.value.slice(0, this.position - 1) +
        this.value.slice(this.position);
    }
    this.position--;
  }

  _update() {
    const template = {};
    const Container = {};
    let Cursor;
    let Content;

    if (this._Container) {
      Cursor = {
        x: this._getCursorX()
      };
      Content = {
        text: {
          text: this.value || this.placeholder
        }
      };
      Container.texture = lng.Tools.getRoundRect(this.w, this.h, this.radius);

      Container.Content = Content;
      Container.Cursor = Cursor;
      template.Container = Container;
      this.patch(template);
    }
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
    const { value, position } = this;
    const text = value.substring(0, position);

    // update hidden value and calc width
    this._HiddenContent.text.text = text;
    this._HiddenContent.loadTexture();
    return this._HiddenContent.renderWidth;
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

  get _Container() {
    return this.tag('Container');
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
}

export default withStyles(Input, styles);
