export default function (Base, callback) {
  return class BoardRowComponent extends Base {
    _init() {
      super._init && super._init();
      if (this.srcCached && callback && typeof callback === 'function') {
        // Pass values back to srcCallback function
        const srcCallback = callback({
          type: Base,
          src: this.srcCached,
          w: this.w,
          h: this.h
        });

        // Accept async / sync
        if (srcCallback.then) {
          srcCallback.then(this._updateKeys.bind(this));
        } else {
          this._updateKeys(srcCallback);
        }

        return srcCallback; // For testing
      }
    }
    _updateKeys(params) {
      Object.keys(params).forEach(key => {
        this[key] = params[key];
      });
      this.requestUpdate();
    }
  };
}
