import lng from '@lightningjs/core';
export default class FunkyFocusRing extends lng.Component {
  static _template() {
    return {
      Test: {
        rect: true,
        w: 400,
        h: 500,
        color: 0xfff663399
      }
    };
  }
}
