export default function withHandleKey(Base) {
  return class extends Base {
    static get name() { return Base.name }

    _handleKey(keyEvent) {
      let { key } = keyEvent;
      if (!key) {
        const keyMap = this.stage.application.__keymap || {};
        key = keyMap[keyEvent.keyCode];
      }
      if (key && typeof this[`on${key}`] === 'function') {
        this[`on${key}`].call(this, keyEvent, this);
        return true;
      }

      this.fireAncestors(`$on${key}`, keyEvent, this);
      return false;
    }
  }
}
