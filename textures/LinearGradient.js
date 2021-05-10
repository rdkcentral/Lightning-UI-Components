/*
  definition of a linear gradient step:
  percent: number between 0 and 1
  color: string ('hsla(0,0,0,0)' or 'rgba(0,0,0,0)`
*/

export default class LinearGradient extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._w = 0;
    this._h = 0;
    this._steps = [];
  }

  // Width
  get w() {
    return this._w;
  }

  set w(w) {
    this._w = w;
    this._changed();
  }

  // Height
  get h() {
    return this._h;
  }

  set h(h) {
    this._h = h;
    this._changed();
  }

  // Steps
  get steps() {
    return this._steps;
  }

  set steps(steps) {
    this._steps = steps;
    this._changed();
  }

  _getLookupId() {
    return `__linearGradient_${this._h}_${this._w}_${this._steps.count}`;
  }

  _getSourceLoader() {
    const w = this._w;
    const h = this._h;
    const steps = this._steps;
    return function (cb: any) {
      let canvas = this.stage.platform.getDrawingCanvas();

      canvas.width = w;
      canvas.height = h;
      var context = canvas.getContext('2d');

      var gradient = context.createLinearGradient(0, 0, 0, h);

      steps.forEach(step => {
        gradient.addColorStop(step.percent, step.color);
      });
      context.fillStyle = gradient;
      context.fillRect(0, 0, w, h);

      cb(null, { source: canvas, w, h });
    };
  }
}
