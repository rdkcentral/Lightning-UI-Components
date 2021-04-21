import Button from '../Button';

export const KEY_DIMENSIONS = { h: 60, w: 60, padding: 0, fixed: true };
const isUpperCase = string => /^[A-Z]$/.test(string);

export default class Key extends Button {
  static _template() {
    return {
      ...super._template(),
      ...KEY_DIMENSIONS
    };
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

  _update() {
    if (this._readyForUpdates) {
      super._update();
      this._updateDropShadow();
    }
  }

  _handleEnter() {
    if (this.toggle) {
      this.fireAncestors('$toggleKeyboard', this.toggle);
    }
    this.fireAncestors('$onSoftKey', { key: this.title });
  }
}
