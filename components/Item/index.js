/**
 * Item Component
 *
 * Parent Item class defines basic functionality for items such as
 * size/ratio, texture, focus, unfocus, and hit states.
 *
 */
import lng from 'wpe-lightning';

export default class Item extends lng.Component {
  static _template() {
    return {
      Item: { w: w => w, h: h => h }
    };
  }

  constructor(...args) {
    super(...args);
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  _init() {
    this._Item.on('txError', () => {
      this._patchErrorState();
    });
  }

  _patchErrorState() {}

  set parentRowFocus(focus) {
    focus ? this.parentRowFocused() : this.parentRowUnfocused();
  }

  set parentGridFocus(focus) {
    focus ? this.parentGridFocused() : this.parentGridUnfocused();
  }

  parentRowFocused() {}

  parentRowUnfocused() {}

  parentGridFocused() {}

  parentGridUnfocused() {}

  _handleEnterRelease(e) {
    if (this.enterAction) {
      return this.enterAction.apply(this, [this, e]);
    }
    return false;
  }

  _handleInfoRelease(e) {
    if (this.infoAction) {
      this.infoAction.apply(this, [this, e]);
      return true;
    }
    return false;
  }

  _getFocused() {
    return this;
  }

  get _Item() {
    return this.tag('Item');
  }
}
