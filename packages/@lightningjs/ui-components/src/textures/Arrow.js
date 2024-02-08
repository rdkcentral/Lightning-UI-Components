/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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