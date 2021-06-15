export function withFocusAlways(Base) {
  return class extends Base {
    static _states() {
      return [
        class Active extends this {
          $enter() {
            super._focus();
          }
          hasFocus() {
            return true;
          }
        }
      ];
    }

    _active() {
      this._setState('Active');
    }
  };
}
