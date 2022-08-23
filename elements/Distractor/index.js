import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import * as styles from './Distractor.styles';

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

class Distractor extends Base {
  static get __componentName() {
    return 'Distractor';
  }

  static get __themeStyles() {
    return styles;
  }

  static get tags() {
    return ['Circle1', 'Circle2', 'Circle3'];
  }

  static _template() {
    return {
      Circle1: {},
      Circle2: {},
      Circle3: {}
    };
  }

  _update() {
    this._updatePositions();
    this._updateCircles();
    this._updateAnimations();
    this.startAnimation();
  }

  _updatePositions() {
    this.x1 = this.style.circleSize / 2;
    this.y1 = 0;
    this.x2 = this.x1 + this.style.circleSize;
    this.y2 = this.y1 + (this.style.circleSize + this.style.circleSize / 2);
    this.x3 = this.x1 - this.style.circleSize;
    this.y3 = this.y2;
  }

  _updateCircles() {
    const texture = {
      texture: lng.Tools.getRoundRect(
        this.style.circleSize,
        this.style.circleSize,
        this.style.circleSize / 2,
        0,
        this.style.circleColor,
        true,
        this.style.circleColor
      )
    };
    this._Circle1.patch(texture);
    this._Circle2.patch(texture);
    this._Circle3.patch(texture);
  }

  _generateActions(order) {
    const slope = -1;
    const sm = this.style.smoothness;
    const keyframes = [0, 1 / 3, 2 / 3, 1];
    // if the path is more than this.propName, use an array to specify the full location
    const props = [['style', 'scale'], 'x', 'y', ['style', 'alpha']];

    return props.reduce((acc, curr) => {
      const propName =
        Array.isArray(curr) && curr.length === 2 ? curr[1] : curr;
      const action = { p: propName, v: {} };

      // loop through each keyframe and create an animation action
      // using the index specified by the passed in "order" array
      // to get the variable name and associated value
      keyframes.forEach((key, index) => {
        const propValue =
          Array.isArray(curr) && curr.length === 2
            ? this[curr[0]][`${curr[1]}${order[index]}`]
            : this[`${curr}${order[index]}`];

        action.v[key] = { v: propValue, sm };
        if (propName !== 'scale') {
          action.v[key].s = slope;
        }
      });

      acc.push(action);
      return acc;
    }, []);
  }

  _updateAnimations() {
    const basicOptions = {
      repeat: -1,
      duration: 3
    };

    this.circle1Animation = this._Circle1.animation({
      ...basicOptions,
      actions: this._generateActions([1, 2, 3, 1])
    });

    this.circle2Animation = this._Circle2.animation({
      ...basicOptions,
      actions: this._generateActions([2, 3, 1, 2])
    });

    this.circle3Animation = this._Circle3.animation({
      ...basicOptions,
      actions: this._generateActions([3, 1, 2, 3])
    });
  }

  startAnimation() {
    this.circle1Animation && this.circle1Animation.start();
    this.circle2Animation && this.circle2Animation.start();
    this.circle3Animation && this.circle3Animation.start();
  }

  stopAnimation() {
    this.circle1Animation && this.circle1Animation.stop();
    this.circle2Animation && this.circle2Animation.stop();
    this.circle3Animation && this.circle3Animation.stop();
  }
}

export default withExtensions(Distractor);
