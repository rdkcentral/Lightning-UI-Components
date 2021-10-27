import context from '../../context';

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
      const keyMap = this.stage.application.__keymap || {};
      let key = keyMap[keyEvent.keyCode];
      if (!key) {
        key = keyEvent.key;
      }
      if (key && typeof this[`on${key}${suffix}`] === 'function') {
        this._invokeKeyPayloadCallback(key + suffix);
        return this[`on${key}${suffix}`].call(this, this, keyEvent);
      }
      this.fireAncestors(`$on${key}${suffix}`, this, keyEvent);
      return false;
    }

    _invokeKeyPayloadCallback(key) {
      if (
        this.metricsPayload &&
        typeof context.keyMetricsCallback === 'function'
      ) {
        context.keyMetricsCallback(key, this.metricsPayload);
      }
    }
  };
}
