export function tileProgressGenerator() {
  return function tileProgress(Base) {
    return class TileProgress extends Base {
      _focus() {
        if (!this._progress) {
          this._progress = Math.random();
        }
        this.progressBar = {
          progress: this._progress
        };
        super._focus();
      }

      _unfocus() {
        this.progressBar = undefined;
        super._unfocus();
      }
    };
  };
}
