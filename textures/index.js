import lng from '@lightningjs/core';
import FadeShader from './FadeShader';

class Circle extends lng.Texture {
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

class Arrow extends lng.Texture {
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
    return function (cb) {
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
      } else if (direction === 'down') {
        ctx.moveTo(p, p);
        ctx.lineTo(w - p, p);
        ctx.lineTo(w / 2, h - p);
      } else {
        // default is left arrow
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

class Line extends lng.Texture {
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

class Bubble extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._w = 0;
    this._h = 0;
    this._radius = 0;
    this._pointerW = 0;
    this._pointerH = 0;
    this._strokeWidth = 0;
    this._color = 'white';
  }

  set w(w) {
    this._w = w;
    this._changed();
  }

  get w() {
    return this._w;
  }

  set h(h) {
    this._h = h;
    this._changed();
  }

  get h() {
    return this._h;
  }

  set radius(radius) {
    if (Array.isArray(radius)) {
      this._radius = new Array(4).fill().map((_, index) => radius[index] || 0);
    } else {
      this._radius = radius;
    }
    this._changed();
  }

  get radius() {
    return this._radius;
  }

  set pointerW(pointerW) {
    this._pointerW = pointerW;
    this._changed();
  }

  get pointerW() {
    return this._pointerW;
  }

  set pointerH(pointerH) {
    this._pointerH = pointerH;
    this._changed();
  }

  get pointerH() {
    return this._pointerH;
  }

  set strokeWidth(strokeWidth) {
    this._strokeWidth = strokeWidth;
    this._changed();
  }

  get strokeWidth() {
    return this._strokeWidth;
  }

  set color(color) {
    this._color = lng.StageUtils.getRgbaString(color);
    this._changed();
  }

  get color() {
    return this._color;
  }

  createBubble({
    stage,
    w = 0,
    h = 0,
    radius = 0,
    pointerW = 0,
    pointerH = 0,
    strokeWidth = 1,
    color = 'white'
  }) {
    const canvas = stage.platform.getDrawingCanvas();
    const ctx = canvas.getContext('2d');

    canvas.width = w + strokeWidth + 4;
    canvas.height = h + strokeWidth + 4;

    ctx.imageSmoothingEnabled = true;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const initialCoord = 0.5 * strokeWidth + 1;
    const leftX = initialCoord;
    const rightX = leftX + w;
    const topY = initialCoord;
    const bottomY = topY + h;
    const bottomBubbleY = bottomY - pointerH;
    const isRadiusAnArray = Array.isArray(radius);
    // start: top left
    ctx.beginPath();
    ctx.moveTo(leftX + (isRadiusAnArray ? radius[0] : radius), topY);
    // top side
    ctx.lineTo(rightX - (isRadiusAnArray ? radius[0] : radius), topY);
    // top right corner
    ctx.arcTo(
      rightX,
      topY,
      rightX,
      topY + (isRadiusAnArray ? radius[1] : radius),
      isRadiusAnArray ? radius[1] : radius
    );

    // right side
    ctx.lineTo(rightX, bottomBubbleY - (isRadiusAnArray ? radius[2] : radius));

    // bottom right corner
    ctx.arcTo(
      rightX,
      bottomBubbleY,
      rightX - (isRadiusAnArray ? radius[2] : radius),
      bottomBubbleY,
      isRadiusAnArray ? radius[2] : radius
    );

    // bottom side, right of point
    ctx.lineTo(w / 2 + pointerW / 2, bottomBubbleY);

    // point
    ctx.arcTo(w / 2, bottomY, w / 2 - pointerW / 2, bottomBubbleY, 2);
    ctx.lineTo(w / 2 - pointerW / 2, bottomBubbleY);

    // bottom side, left of point
    ctx.lineTo(leftX + (isRadiusAnArray ? radius[3] : radius), bottomBubbleY);

    // bottom left corner
    ctx.arcTo(
      leftX,
      bottomBubbleY,
      leftX,
      bottomBubbleY - (isRadiusAnArray ? radius[3] : radius),
      isRadiusAnArray ? radius[3] : radius
    );

    // left side
    ctx.lineTo(leftX, topY + (isRadiusAnArray ? radius[0] : radius));

    // top left corner
    ctx.arcTo(
      leftX,
      topY,
      leftX + (isRadiusAnArray ? radius[0] : radius),
      topY,
      isRadiusAnArray ? radius[0] : radius
    );

    // draw shape and fill with color
    ctx.stroke();
    ctx.fill();

    return canvas;
  }

  _getLookupId() {
    const { w, h, radius, pointerW, pointerH, color } = this;
    return `__bubble_${w}x${h}_radius-${radius}_pointer-${pointerW}x${pointerH}_fill-${color}`;
  }

  _getSourceLoader() {
    return cb => {
      cb(null, {
        source: this.createBubble(this)
      });
    };
  }
}

export { FadeShader, Circle, Arrow, Line, Bubble };
