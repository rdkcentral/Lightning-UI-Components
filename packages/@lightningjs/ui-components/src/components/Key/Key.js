import Button from '../Button/index.js';
import * as styles from './Key.styles.js';
import Icon from '../Icon/index.js';

const isUpperCase = string => /^[A-Z]$/.test(string);
const isAlphaChar = string => /^[A-Za-z]$/.test(string);

// TODO: Post theming when we address language/locale issues this could be a configurable object
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

function getNato(title) {
  if (isAlphaChar(title)) {
    return `${title}, ${alphaNato[title.toLowerCase()]}`;
  }

  return title;
}

export default class Key extends Button {
  static get __componentName() {
    return 'Key';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'icon', 'size', 'toggle'];
  }

  _construct() {
    super._construct();
    this._size = 'sm';
    this._fixed = true;
  }

  _update() {
    this.w = this.style.sizes[this.size] || this.style.sizes.sm;
    this._updatePrefixStyle();
    super._update();
  }

  _updatePrefixStyle() {
    if (this._prefix && this.icon) {
      this._updatePrefixObj(this.icon, { style: this.style.iconStyle });
    }
  }

  _updatePrefixObj(icon, props = {}) {
    this._prefix = {
      type: Icon,
      icon,
      w: this.style.iconW,
      h: this.style.iconH,
      ...props
    };
  }

  _setIcon(icon) {
    if (icon) {
      this._updatePrefixObj(icon, { style: this.style.iconStyle });
    } else {
      this._prefix = icon;
    }

    return icon;
  }

  set announce(announce) {
    super.announce = announce;
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

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      return this.onEnter(this);
    } else {
      if (this.toggle) {
        this.fireAncestors('$toggleKeyboard', this.toggle);
      }
      this.fireAncestors('$onSoftKey', {
        key: this.keyId || this.title,
        toggle: this.toggle
      });
    }

    return false;
  }
}
