import lng from '@lightningjs/core';
import Base from '../../Base';
import * as styles from './Shadow.styles.js';
import { withExtensions } from '../../mixins';

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

  _init() {
    super._init();
    this.shouldSmooth = true;
  }

  _update() {
    // To behave like Figma's shadow settings, blur value is added to width and height to expand shadow size
    const margin = this.style.spread + this.style.blur * 2; // size increase based on shadow params
    const holepunchError = 4; // extra value to tighten holepunch area so you don't see sliver of extra space

    const frameUpdate = {
      shadowMargin: margin, // store this avlue to check btwn renders
      w: this.w + margin * 2,
      h: this.h + margin * 2,
      x: this.w / 2 + this.style.offsetX,
      y: this.h / 2 + this.style.offsetY,
      mount: 0.5,

      // maskShadow prop enables a holepunch shader to mask out the parent component shape
      rtt: this.maskShadow,
      shader: this.maskShadow
        ? {
            type: lng.shaders.Hole,
            w: this.w - holepunchError,
            h: this.h - holepunchError,
            x: margin + holepunchError / 2 - this.style.offsetX,
            y: margin + holepunchError / 2 - this.style.offsetY,
            radius: this.style.radius
          }
        : undefined
    };

    const shadowPatch = {
      alpha: this.style.alpha,
      color: this.style.color
    };

    const texturePatch = {
      texture: lng.Tools.getShadowRect(
        // Underlying getShadowRect function adds blur to the canvas size, so we don't need to add it like above
        this.w + this.style.spread * 2,
        this.h + this.style.spread * 2,
        this.style.radius,
        this.style.blur
      )
    };

    if (
      !this._Frame ||
      !this.shouldSmooth ||
      // if shadow sizing has changed, patch instead of smooth
      frameUpdate.shadowMargin !== this._Frame.shadowMargin
    ) {
      this.patch({
        Frame: {
          ...frameUpdate,
          Shadow: {
            ...shadowPatch,
            ...texturePatch
          }
        }
      });
    } else {
      // Some values we don't smooth
      this._Frame.patch({
        shadowMargin: frameUpdate.shadowMargin, //store previous shadow sizing calculation
        w: frameUpdate.w,
        h: frameUpdate.h,
        rtt: frameUpdate.rtt,
        shader:
          // add shader if it's newly needed (switch from maskShadow = false to true)
          !this._Frame.shader && frameUpdate.shader
            ? frameUpdate.shader
            : // Remove shader if it's not needed (switch from maskShadow = true to false)
            !frameUpdate.shader
            ? undefined
            : // otherwise re-use last value
              this._Frame.shader,
        Shadow: { ...texturePatch }
      });

      shadowPatch.alpha = [shadowPatch.alpha, this.style.animation];
      this._Shadow.smooth = shadowPatch;

      this._Frame.setSmooth('x', frameUpdate.x, this.style.animation);
      this._Frame.setSmooth('y', frameUpdate.y, this.style.animation);

      if (this.maskShadow) {
        this._Frame.setSmooth(
          'shader.x',
          frameUpdate.shader.x,
          this.style.animation
        );
        this._Frame.setSmooth(
          'shader.y',
          frameUpdate.shader.y,
          this.style.animation
        );
        this._Frame.setSmooth(
          'shader.radius',
          frameUpdate.shader.radius,
          this.style.animation
        );
        this._Frame.setSmooth('shader.w', frameUpdate.shader.w, {
          duration: 0
        });
        this._Frame.setSmooth('shader.h', frameUpdate.shader.h, {
          duration: 0
        });
      }
    }
  }
}

export default withExtensions(Shadow);
