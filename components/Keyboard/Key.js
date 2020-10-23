import Button from '../Button';
import withStyles from '../../mixins/withStyles';
// styles
import { getFocusScale } from '../Styles';

export const KEY_DIMENSIONS = { h: 60, w: 60, padding: 0, fixed: true };
const isUpperCase = string => /^[A-Z]$/.test(string);

export const keyStyles = theme => ({
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button1,
    color: theme.palette.text.light.primary
  },
  shadow: theme.materials.glow,
  icon: {
    color: theme.palette.text.light.primary,
    size: 32,
    spacing: theme.spacing(2)
  },
  sizes: {
    small: 60,
    medium: 128,
    large: 196,
    xlarge: 400
  },
  focused: {
    background: { color: theme.palette.background.focus },
    icon: { color: theme.palette.text.dark.primary },
    text: { color: theme.palette.text.dark.primary }
  }
});

export default class Key extends withStyles(Button, keyStyles) {
  static _template() {
    return {
      ...super._template(),
      ...KEY_DIMENSIONS,
      DropShadow: {
        alpha: 0,
        ...this.styles.shadow({
          w: this.styles.w,
          h: this.styles.h
        })
      }
    };
  }

  _init() {
    const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
    this._DropShadow.patch(DropShadow);
  }

  set config(config) {
    if (config) {
      this.sizes = config.sizes;
    }
  }

  set icon(src) {
    if (src) {
      this._Icon.patch({
        color: 0xffffffff,
        size: 32,
        spacing: 16,
        src
      });
    }
  }

  set size(size) {
    this.w = this._sizes[size] || this.h;
  }

  set char(char) {
    this.title = char;
  }

  set announce(value) {
    this._announce = value;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    if (isUpperCase(this.title)) {
      return `Capital ${this.title}, button`;
    }

    return this.title + ', button';
  }

  set label(label) {
    this.title = label;
  }

  get _sizes() {
    return this.styles.sizes
      ? { ...this.styles.sizes, ...this.sizes }
      : { small: 50, medium: 110, large: 170, xlarge: 350, ...this.sizes };
  }

  _updateDropShadow() {
    if (this.w !== this.styles.w) {
      const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
      this._DropShadow.patch(DropShadow);
    }
    const alpha = Number(this._focused);
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      super._update();
      this._updateDropShadow();
    });
  }

  get _DropShadow() {
    return this.tag('DropShadow');
  }

  _handleEnter() {
    if (this.toggle) {
      this.fireAncestors('$toggleKeyboard', this.toggle);
    }
    this.fireAncestors('$onSoftKey', { key: this.title });
  }
}
