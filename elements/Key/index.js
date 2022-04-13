import Button from '../Button';
import withStyles from '../../mixins/withStyles';
import keyStyles from './Key.styles';

export const KEY_DIMENSIONS = { h: 60, w: 60, padding: 0, fixed: true };
const isUpperCase = string => /^[A-Z]$/.test(string);
const isAlphaChar = string => /^[A-Za-z]$/.test(string);
const alphaNato = {
  a: 'alpha',
  b: 'bravo',
  c: 'charlie',
  d: 'delta',
  e: 'echo',
  f: 'foxtrot',
  g: 'golf',
  h: 'hotel',
  i: 'india',
  j: 'juliett',
  k: 'kilo',
  l: 'lima',
  m: 'mike',
  n: 'november',
  o: 'oscar',
  p: 'papa',
  q: 'quebec',
  r: 'romeo',
  s: 'sierra',
  t: 'tango',
  u: 'uniform',
  v: 'victor',
  w: 'whiskey',
  x: 'x-ray',
  y: 'yankee',
  z: 'zulu'
};

function getNato(char) {
  if (isAlphaChar(char)) {
    return `${char}, ${alphaNato[char.toLowerCase()]}`;
  }

  return char;
}

export default class Key extends withStyles(Button, keyStyles) {
  static _template() {
    return {
      ...super._template(),
      ...KEY_DIMENSIONS
    };
  }

  static get properties() {
    return [...super.properties, 'config', 'size', 'toggle'];
  }

  _setIcon(icon) {
    const mergedIcon = super._setIcon({ ...this.styles.icon, ...icon });
    return mergedIcon.src ? mergedIcon : null;
  }

  _updateIcon() {
    super._updateIcon();
    this._Title.patch({
      alpha: this.icon && this.icon.src ? 0 : 1
    });
  }

  _setConfig(config) {
    if (config) {
      this.sizes = config.sizes;
      return config;
    }
  }

  _setSize(size) {
    this.w = this._sizes[size] || this.h;
    return size;
  }

  set char(char) {
    this.title = char;
  }

  set announce(announce) {
    super._announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    if (isUpperCase(this.title)) {
      return `Capital ${getNato(this.title)}, button`;
    }

    return getNato(this.title) + ', button';
  }

  _setLabel(label) {
    this.title = label;
    return label;
  }

  get _sizes() {
    return this.styles.sizes
      ? { ...this.styles.sizes, ...this.sizes }
      : { small: 50, medium: 110, large: 170, xlarge: 350, ...this.sizes };
  }

  _updateDropShadow() {
    if (this.hasFocus() || this._DropShadow) {
      if (this.w !== this.styles.w || !this._DropShadow) {
        const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
        this.patch({ DropShadow: DropShadow });
      }
      const alpha = Number(this.hasFocus());
      if (this._smooth) {
        this._DropShadow.smooth = { alpha };
      } else {
        this._DropShadow.alpha = alpha;
      }
    }
  }

  _update() {
    if (this._readyForUpdates) {
      super._update();
      this._updateDropShadow();
    }
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
