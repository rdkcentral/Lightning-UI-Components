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

import Base from '../Base';
import * as styles from './Slider.styles.js';
import ProgressBar from '../ProgressBar';
import Icon from '../Icon';
import Knob from '../Knob';
import { degreesToRadians } from '../../utils';

export default class Slider extends Base {
  static get __componentName() {
    return 'Slider';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Container: {
        mountY: 0.5,
        y: h => h / 2,
        Bar: {
          mountY: 0.5,
          SliderBar: {
            type: ProgressBar,
            progress: 0.5,
            mountY: 0.5,
            announce: ''
          },
          Circle: {
            type: Knob,
            zIndex: 5 // places circle knob on top of sliderBar
          }
        },
        LeftArrow: {
          type: Icon,
          mountY: 0.5,
          y: h => h / 2
        },
        RightArrow: {
          type: Icon,
          mountY: 0.5,
          y: h => h / 2
        }
      }
    };
  }

  static get properties() {
    return ['max', 'min', 'step', 'value', 'vertical'];
  }

  static get tags() {
    return [
      'Container',
      {
        name: 'Bar',
        path: 'Container.Bar'
      },
      {
        name: 'SliderBar',
        path: 'Container.Bar.SliderBar'
      },
      {
        name: 'Circle',
        path: 'Container.Bar.Circle'
      },
      {
        name: 'LeftArrow',
        path: 'Container.LeftArrow'
      },
      {
        name: 'RightArrow',
        path: 'Container.RightArrow'
      }
    ];
  }

  _construct() {
    super._construct();
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._value = 0;
    this._vertical = false;
  }

  _update() {
    this._updateDirection();
    this._updateSliderLayout();
    this._updatePositions();
    this._updateArrowAlpha();
    this._updateArrows();
    this.signal('onChange', this.value, this);
    if (this._valueChanged) {
      this.fireAncestors('$announce', this.announce);
      this._valueChanged = false;
    }
  }

  _handleLeft() {
    if (this._isDisabledMode) {
      return false;
    }
    this._decrementValue();
    if (typeof this.onLeft === 'function') {
      return this.onLeft(this);
    }
    return true;
  }

  _handleRight() {
    if (this._isDisabledMode) {
      return false;
    }
    this._incrementValue();
    if (typeof this.onRight === 'function') {
      return this.onRight(this);
    }
    return true;
  }

  _updateDirection() {
    this.patch({
      pivotX: 0,
      rotation: this.vertical ? degreesToRadians(90) : 0,
      mountY: this.vertical ? 0.5 : 0
    });
  }

  _updateSliderLayout() {
    const w = this.w || this.style.minWidth;
    this._Container.patch({
      h: this.style.containerHeight,
      w,
      Bar: {
        x: this._calculatedSliderX,
        SliderBar: {
          y: this.style.containerHeight / 2,
          w: this._calculatedSliderWidth,
          style: {
            duration: 0,
            ...this.style.progressBar
          }
        }
      }
    });
    this.h = Math.max(this.style.containerHeight, this.style.arrowHeight);
  }

  _updatePositions() {
    this._updateSliderProgress();
    this._updateCirclePosition();
  }

  _updateSliderProgress() {
    let progress =
      this.value < this.min ? this.min / this.max : this.value / this.max;

    if (this.value > this.max || this.value - this.step > this.max) {
      progress = this._calculatedSliderWidth;
    } else if (this.min < 0 || this.max < 0) {
      progress = (this.value - this.min) / (this.max - this.min);
    }

    this._SliderBar.progress = progress;
  }

  _updateCirclePosition() {
    let xCirclePosition;
    if (this.value < this.min || this.value + this.step < this.min) {
      xCirclePosition = (this.min / this.max) * this._calculatedSliderWidth;
    } else if (this.value > this.max || this.value - this.step > this.max) {
      xCirclePosition = this._calculatedSliderWidth;
    } else {
      if (this.min < 0 || this.max < 0) {
        xCirclePosition =
          ((this.value - this.min) / (this.max - this.min)) *
          this._calculatedSliderWidth;
      } else {
        xCirclePosition = (this.value / this.max) * this._calculatedSliderWidth;
      }
    }

    if (this._Circle) {
      this._Circle.patch({
        mode: this.mode,
        style: {
          radius: this.style.radius,
          w: this.style.w,
          h: this.style.h,
          circleColor: this.style.circleColor
        },
        y: this._SliderBar.y + 1,
        alpha: this._isFocusedMode && this.style.showKnob ? 1 : 0
      });

      if (Object.keys(this.style.circleAnimation).length) {
        this._Circle.smooth = {
          x: [xCirclePosition, this.style.circleAnimation]
        };
      } else {
        this._Circle.x = xCirclePosition;
      }
    }
  }

  _updateArrowAlpha() {
    // fade arrows at min/max
    let leftAlpha;
    let rightAlpha;

    // ensure arrows are always rendered, otherwise color changes might not apply right away
    const offAlpha = 0.001;
    const alpha = this.style.showArrows ? this.style.arrowAlphaValue : offAlpha;
    const alphaLimit = this.style.showArrows
      ? this.style.arrowAlphaValueLimit
      : offAlpha;

    leftAlpha = rightAlpha = alpha;
    if (!this._isDisabledMode && this.value <= this.min) {
      leftAlpha = alphaLimit;
      rightAlpha = alpha;
    } else if (!this._isDisabledMode && this.value >= this.max) {
      leftAlpha = alpha;
      rightAlpha = alphaLimit;
    }

    this._LeftArrow.smooth = { alpha: leftAlpha };
    this._RightArrow.smooth = { alpha: rightAlpha };
  }

  _updateArrows() {
    const arrowProps = {
      w: this.style.arrowWidth,
      h: this.style.arrowHeight,
      style: {
        color: this.style.arrowColor
      }
    };
    this._LeftArrow.patch({
      ...arrowProps,
      icon: this.style.iconLeftSrc
    });
    this._RightArrow.patch({
      ...arrowProps,
      icon: this.style.iconRightSrc
    });

    this._RightArrow.smooth = {
      x: this.style.arrowSpacing + this._calculatedSliderWidth + this._Bar.x
    };
  }

  _decrementValue() {
    const value = this.value - this.step;
    this.value = value >= this.min ? value : this.min;
    this._updatePositions();
  }

  _incrementValue() {
    const value = this.value + this.step;
    this.value = value <= this.max ? value : this.max;
    this._updatePositions();
  }

  _handleUp() {
    return false;
  }

  _handleDown() {
    return false;
  }

  get _calculatedSliderX() {
    return this.style.showArrows
      ? this.style.arrowSpacing + this.style.arrowWidth
      : 0;
  }

  get _calculatedSliderWidth() {
    const totalArrowSize = this.style.showArrows
      ? this.style.arrowSpacing * 2 + this.style.arrowWidth * 2
      : 0;
    return this.w < totalArrowSize + this._circleW
      ? this.style.minWidth - totalArrowSize
      : this.w - totalArrowSize;
  }

  get _circleW() {
    return this._Circle ? this._Circle.w : 0;
  }

  _setVertical(vertical) {
    this._setState(vertical ? 'VerticalSlider' : '');
    return vertical;
  }

  _setValue(value) {
    this._valueChanged = value !== this._value;
    return value;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce != undefined) {
      return this._announce;
    }
    return this.value !== undefined && this.value.toString();
  }

  static _states() {
    return [
      class VerticalSlider extends this {
        _handleLeft() {
          return false;
        }

        _handleRight() {
          return false;
        }

        _handleUp() {
          if (this._isDisabledMode) {
            return false;
          }
          this._decrementValue();
          if (typeof this.onUp === 'function') {
            return this.onUp(this);
          }
          return true;
        }

        _handleDown() {
          if (this._isDisabledMode) {
            return false;
          }
          this._incrementValue();
          if (typeof this.onDown === 'function') {
            return this.onDown(this);
          }
          return true;
        }
      }
    ];
  }
}
