import lng from '@lightningjs/core';

export default class Circle extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._color = 'rgb(0,0,0)';
    this._fill = true;
    this._radius = 100;
    this._stroke = false;
    this._strokeColor = 'rgb(0,0,0)';
    this._strokeWidth = 1;
  }

  get fill() {
    return this._fill;
  }

  set fill(fill) {
    this._fill = fill;
    this._changed();
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
    this._changed();
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this._changed();
  }

  get stroke() {
    return this._stroke;
  }

  set stroke(stroke) {
    this._stroke = stroke;
    this._changed();
  }

  get strokeWidth() {
    return this._strokeWidth;
  }

  set strokeWidth(strokeWidth) {
    this._strokeWidth = strokeWidth;
    this._changed();
  }

  get strokeColor() {
    return this._strokeColor;
  }

  set strokeColor(strokeColor) {
    this._strokeColor = strokeColor;
    this._changed();
  }

  _getLookupId() {
    return `__circle_${this._radius}`;
  }

  _getSourceLoader() {
    // We need to scope these to protect them from modifications while loading (which may be async).
    const color = this._color;
    const fill = this._fill;
    const radius = this._radius;
    const stroke = this._stroke;
    const strokeColor = this._strokeColor;
    const strokeWidth = this._strokeWidth;
    const canvas = this.stage.platform.getDrawingCanvas();
    let dimension = radius;

    if (stroke) {
      dimension = radius + strokeWidth * 2;
    }

    canvas.width = dimension * 2;
    canvas.height = dimension * 2;

    return function(cb) {
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeColor;
      ctx.fillStyle = color;
      ctx.beginPath();

      ctx.arc(dimension, dimension, radius, 0, 2 * Math.PI);

      if (fill) {
        ctx.fill();
      }

      if (stroke) {
        ctx.stroke();
      }
      cb(null, { source: canvas, radius });
    };
  }
}
