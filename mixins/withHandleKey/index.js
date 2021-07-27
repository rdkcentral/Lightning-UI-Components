export default function withHandleKey(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _handleKey(keyEvent) {
      return this._processEvent(keyEvent);
    }

    _handleKeyRelease(keyEvent) {
      return this._processEvent(keyEvent, 'Release');
    }

    _processEvent(keyEvent, suffix = '') {
      let { key } = keyEvent;
      if (!key) {
        const keyMap = this.stage.application.__keymap || {};
        key = keyMap[keyEvent.keyCode];
      }
      if (key && typeof this[`on${key}${suffix}`] === 'function') {
        return this[`on${key}${suffix}`].call(this, this, keyEvent) || false;
      }
      this.fireAncestors(`$on${key}${suffix}`, this, keyEvent);
      return false;
    }
  };
}
