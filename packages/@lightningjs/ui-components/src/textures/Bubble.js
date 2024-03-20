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

export default class Bubble extends lng.Texture {
  constructor(stage) {
    super(stage);
    this._w = 0;
    this._h = 0;
    this._radius = 0;
    this._pointerWidth = 0;
    this._pointerHeight = 0;
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

  set pointerWidth(pointerWidth) {
    this._pointerWidth = pointerWidth;
    this._changed();
  }

  get pointerWidth() {
    return this._pointerWidth;
  }

  set pointerHeight(pointerHeight) {
    this._pointerHeight = pointerHeight;
    this._changed();
  }

  get pointerHeight() {
    return this._pointerHeight;
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
    pointerWidth = 0,
    pointerHeight = 0,
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
    const bottomBubbleY = bottomY - pointerHeight;
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
    ctx.lineTo(w / 2 + pointerWidth / 2, bottomBubbleY);

    // point
    ctx.arcTo(w / 2, bottomY, w / 2 - pointerWidth / 2, bottomBubbleY, 2);
    ctx.lineTo(w / 2 - pointerWidth / 2, bottomBubbleY);

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
    const { w, h, radius, pointerWidth, pointerHeight, color } = this;
    return `__bubble_${w}x${h}_radius-${radius}_pointer-${pointerWidth}x${pointerHeight}_fill-${color}`;
  }

  _getSourceLoader() {
    return cb => {
      cb(null, {
        source: this.createBubble(this)
      });
    };
  }
}
