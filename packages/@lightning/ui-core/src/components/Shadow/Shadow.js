import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import * as styles from './Shadow.styles.js';
import { withExtensions } from '../../mixins/index.js';

class Shadow extends Base {
  static get __componentName() {
    return 'Shadow';
  }

  static get __themeStyle() {
    return styles;
  }
  static get properties() {
    return ['maskShadow'];
  }
  static get tags() {
    return ['Frame', { name: 'Shadow', path: 'Frame.Shadow' }];
  }

  get mode() {
    return super.mode;
  }
  set mode(v) {
    const shouldUpdateStyle = v !== this.mode;
    super.mode = v;
    if (shouldUpdateStyle) {
      this._updateFocusStyle();
    }
  }

  _updateFocusStyle() {
    if (!this._Shadow) return;

    // TODO: think about how does the user know which styles are handled in the focus transition.
    this.applySmooth(
      this._Shadow,
      { alpha: this.style.alpha, y: this.style.offsetY, x: this.style.offsetX },
      {
        alpha: [this.style.alpha, this.style.animation],
        y: [this.style.offsetY, this.style.animation],
        x: [this.style.offsetX, this.style.animation]
      }
    );
  }

  _update() {
    // To behave like Figma's shadow settings, blur value is added to width and height to expand shadow size
    const shadowSize = this.style.spread + this.style.blur * 2; // size increase based on shadow params
    const holepunchError = 4; // extra value to tighten holepunch area so you don't see sliver of extra space

    // TODO: Need to know which mode style has the largest offset values, could refactor
    const extraBoundsY = this.style.maxOffsetY;
    const extraBoundsX = this.style.maxOffsetX;

    this.patch({
      Frame: {
        w: this.w + shadowSize * 2 + extraBoundsX,
        h: this.h + shadowSize * 2 + extraBoundsY,
        x: (this.w + extraBoundsX) / 2,
        y: (this.h + extraBoundsY) / 2,
        mount: 0.5,

        // maskShadow prop enables a holepunch shader to mask out the parent component shape
        rtt: this.maskShadow,
        shader: this.maskShadow
          ? {
              type: lng.shaders.Hole,
              w: this.w - holepunchError,
              h: this.h - holepunchError,
              x: shadowSize + holepunchError / 2,
              y: shadowSize + holepunchError / 2,
              radius: this.style.radius
            }
          : undefined,
        Shadow: {
          color: this.style.color,
          texture: lng.Tools.getShadowRect(
            // Underlying getShadowRect function adds blur to the canvas size, so we don't need to add it like above
            this.w + this.style.spread * 2,
            this.h + this.style.spread * 2,
            this.style.radius,
            this.style.blur
          )
        }
      }
    });

    // Set to should smooth after initial shadow patch has been created
    if (this.shouldSmooth === undefined) {
      this._updateFocusStyle();
      this.shouldSmooth = true;
    }
  }
}

export default withExtensions(Shadow);
