export class Circle extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._color = `rgb(0,0,0)`;
    this._fill = true;
    this._radius = 100;
    this._stroke = false;
    this._strokeColor = `rgb(0,0,0)`;
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

    return function (cb) {
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

export class Arrow extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._color = `rgb(13, 13, 15)`;
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
    return function (cb) {
      var ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = color;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      let p = ctx.lineWidth / 2;
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

export class Line extends lng.Texture {
  constructor(stage) {
    super(stage);

    this._w = 0;
    this._h = 0;
    this._rounded = false;
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

  get rounded() {
    return this._rounded;
  }

  set rounded(rounded) {
    this._rounded = rounded;
    this._changed();
  }

  _getLookupId() {
    return `__line_${this._w}x${this._h}${this._rounded ? '_rounded' : ''}`;
  }

  _getSourceLoader() {
    // We need to scope these to protect them from modifications while loading (which may be async).
    const w = this._w;
    const h = this._h;
    const rounded = this._rounded;

    var canvas = this.stage.platform.getDrawingCanvas();
    return function (cb) {
      var ctx = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;
      ctx.lineWidth = h;

      if (rounded) {
        ctx.lineCap = 'round';
      }

      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(rounded ? 2 : 0, h / 2);
      ctx.lineTo(rounded ? w - 2 : w, h / 2);
      ctx.stroke();

      cb(null, { source: canvas, w, h, rounded });
    };
  }
}
