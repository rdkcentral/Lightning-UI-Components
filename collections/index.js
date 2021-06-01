export function withFocusAlways(Base) {
  return class extends Base {
    _init() {
      super._init();
      super._focus();
    }

    hasFocus() {
      return true;
    }
  };
}
