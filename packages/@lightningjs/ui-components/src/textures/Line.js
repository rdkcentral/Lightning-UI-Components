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

export default class Line extends lng.Texture {
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