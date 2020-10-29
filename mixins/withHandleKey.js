export default function withHandleKey(Base) {
  return class extends Base {
    static get name() { return Base.name }

    _handleKey(keyEvent) {
      let { key } = keyEvent;
      if (typeof this[`on${key}`] === 'function') {
        this[`on${key}`].call(this, keyEvent, this);
        return true;
      }

      this.fireAncestors(`$on${key}`, keyEvent, this);
      return false;
    }
  }
}
