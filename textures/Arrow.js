import lng from '@lightningjs/core';

export default class Arrow extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._color = 'rgb(13, 13, 15)';
    this._w = 0;
    this._h = 0;
    this._direction = 'right';
  }

  get w() {
    return this._w;
  }

  set w(l) {
    this._w = l;
    this._changed();
  }

  get h() {
    return this._h;
  }

  set h(l) {
    this._h = l;
    this._changed();
  }

  get direction() {
    return this._direction;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this._changed();
  }

  set direction(direction) {
    this._direction = direction;
    this._changed();
  }

  _getLookupId() {
    return `__triangle_${this._direction}_${this._w}x${this._h}`;
  }

  _getSourceLoader() {
    // We need to scope these to protect them from modifications while loading (which may be async).
    const color = this._color;
    const w = this._w;
    const h = this._h;
    const direction = this._direction;

    var canvas = this.stage.platform.getDrawingCanvas();
    return function(cb) {
      var ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = color;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const p = ctx.lineWidth / 2;
      ctx.beginPath();

      if (direction === 'right') {
        ctx.moveTo(p, p);
        ctx.lineTo(p, h - p);
        ctx.lineTo(w - p, h / 2);
      } else {
        ctx.moveTo(p, h / 2);
        ctx.lineTo(w - p, p);
        ctx.lineTo(w - p, h - p);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      cb(null, { source: canvas, w, h, direction });
    };
  }
}
