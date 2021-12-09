import lng from '@lightningjs/core';

/*
  First create 3 circles named Circle1, Circle2, Circle3, all are in same dimension the least values and, in first state(smallest)
  On animating these 3, the properties scale, alpha, x, and y will be affected
  Assuming first state is the smallest circle, second state is the largest circle and third state is intermediate circle
  Then applying animations to Circle1, the flow is like  1 -> 2 -> 3 -> 1
  On applying animations to the Circle2, first of all it goes to second position and scaled to large values, then starts animating it
  the flow is like  2 -> 3 -> 1 -> 2
  The Circle3 also follows the way the Circle2 is, first time moves to the third position and scaled, then starts animating it
  the flow is like  3 -> 1 -> 2 -> 3
     1
    / \
   /   \
  3_____2
*/
const alpha1 = 0.2;
const alpha2 = 1;
const alpha3 = 0.6;
const scale1 = 0.4;
const scale2 = 1;
const scale3 = 0.7;
export default class ThreeDot extends lng.Component {
  static _template() {
    return {
      Circle1: {
        zIndex: 2,
        alpha: alpha1
      },
      Circle2: {
        zIndex: 2,
        alpha: alpha2
      },
      Circle3: {
        zIndex: 2,
        alpha: alpha3
      }
    };
  }

  get _Circle1() {
    return this.tag('Circle1');
  }

  get _Circle2() {
    return this.tag('Circle2');
  }

  get _Circle3() {
    return this.tag('Circle3');
  }

  _init() {
    this.x1 = this.circleSize / 2;
    this.y1 = 0;
    this.x2 = this.x1 + this.circleSize;
    this.y2 = this.y1 + (this.circleSize + this.circleSize / 2);
    this.x3 = this.x1 - this.circleSize;
    this.y3 = this.y2;

    this.changeCircleSize(this.circleSize);

    const basicOptions = {
      repeat: -1,
      duration: 3
    };

    this.circle1Animation = this._Circle1.animation({
      ...basicOptions,
      actions: [
        {
          p: 'scale',
          v: {
            0: { v: scale1, sm: 0.8 },
            0.33: { v: scale2, sm: 0.8 },
            0.66: { v: scale3, sm: 0.8 },
            1: { v: scale1, sm: 0.8 }
          }
        },
        {
          p: 'x',
          v: {
            0: { v: this.x1, sm: 0.8, s: -1 },
            0.33: { v: this.x2, sm: 0.8, s: -1 },
            0.66: { v: this.x3, sm: 0.8, s: -1 },
            1: { v: this.x1, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'y',
          v: {
            0: { v: this.y1, sm: 0.8, s: -1 },
            0.33: { v: this.y2, sm: 0.8, s: -1 },
            0.66: { v: this.y3, sm: 0.8, s: -1 },
            1: { v: this.y1, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'alpha',
          v: {
            0: { v: alpha1, sm: 0.8, s: -1 },
            0.33: { v: alpha2, sm: 0.8, s: -1 },
            0.66: { v: alpha3, sm: 0.8, s: -1 },
            1: { v: alpha1, sm: 0.8, s: -1 }
          }
        }
      ]
    });

    this.circle2Animation = this._Circle2.animation({
      ...basicOptions,
      actions: [
        {
          p: 'scale',
          v: {
            0: { v: scale2, sm: 0.8 },
            0.33: { v: scale3, sm: 0.8 },
            0.66: { v: scale1, sm: 0.8 },
            1: { v: scale2, sm: 0.8 }
          }
        },
        {
          p: 'x',
          v: {
            0: { v: this.x2, sm: 0.8, s: -1 },
            0.33: { v: this.x3, sm: 0.8, s: -1 },
            0.66: { v: this.x1, sm: 0.8, s: -1 },
            1: { v: this.x2, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'y',
          v: {
            0: { v: this.y2, sm: 0.8, s: -1 },
            0.33: { v: this.y3, sm: 0.8, s: -1 },
            0.66: { v: this.y1, sm: 0.8, s: -1 },
            1: { v: this.y2, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'alpha',
          v: {
            0: { v: alpha2, sm: 0.8, s: -1 },
            0.33: { v: alpha3, sm: 0.8, s: -1 },
            0.66: { v: alpha1, sm: 0.8, s: -1 },
            1: { v: alpha2, sm: 0.8, s: -1 }
          }
        }
      ]
    });

    this.circle3Animation = this._Circle3.animation({
      ...basicOptions,
      actions: [
        {
          p: 'scale',
          v: {
            0: { v: scale3, sm: 0.8 },
            0.33: { v: scale1, sm: 0.8 },
            0.66: { v: scale2, sm: 0.8 },
            1: { v: scale3, sm: 0.8 }
          }
        },
        {
          p: 'x',
          v: {
            0: { v: this.x3, sm: 0.8, s: -1 },
            0.33: { v: this.x1, sm: 0.8, s: -1 },
            0.66: { v: this.x2, sm: 0.8, s: -1 },
            1: { v: this.x3, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'y',
          v: {
            0: { v: this.y3, sm: 0.8, s: -1 },
            0.33: { v: this.y1, sm: 0.8, s: -1 },
            0.66: { v: this.y2, sm: 0.8, s: -1 },
            1: { v: this.y3, sm: 0.8, s: -1 }
          }
        },
        {
          p: 'alpha',
          v: {
            0: { v: alpha3, sm: 0.8, s: -1 },
            0.33: { v: alpha1, sm: 0.8, s: -1 },
            0.66: { v: alpha2, sm: 0.8, s: -1 },
            1: { v: alpha3, sm: 0.8, s: -1 }
          }
        }
      ]
    });

    this.circle1Animation.start();
    this.circle2Animation.start();
    this.circle3Animation.start();
  }

  changeCircleSize(size) {
    this._Circle1.patch({
      texture: lng.Tools.getRoundRect(
        size,
        size,
        size / 2,
        0,
        this.color,
        true,
        this.color
      )
    });
    this._Circle2.patch({
      texture: lng.Tools.getRoundRect(
        size,
        size,
        size / 2,
        0,
        this.color,
        true,
        this.color
      )
    });
    this._Circle3.patch({
      texture: lng.Tools.getRoundRect(
        size,
        size,
        size / 2,
        0,
        this.color,
        true,
        this.color
      )
    });
    this.circleSize = size;
  }

  cleanup() {
    if (this.circle1Animation) {
      this.circle1Animation.stop();
    }

    if (this.circle2Animation) {
      this.circle2Animation.stop();
    }

    if (this.circle3Animation) {
      this.circle3Animation.stop();
    }
  }
}
