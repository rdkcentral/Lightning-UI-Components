import lng from '@lightningjs/core';
import Button from '../Button';
import { RoundRect } from '../../utils';
import withStyles from '../../mixins/withStyles';
import ActionButtonBaseStyles from './ActionButtonBase.styles';

export class ActionButtonBase extends withStyles(
  Button,
  ActionButtonBaseStyles
) {
  static _template() {
    return {
      ...super._template(),
      minWidth: this.styles.minWidth,
      h: this.styles.h,
      padding: this.styles.padding,
      radius: this.styles.radius,
      text: this.styles.text,
      focus: this.styles.focus,
      unfocus: this.styles.unfocus,
      backgroundType: 'float',
      Loader: {
        color: this.styles.loading.color
      },
      DropShadow: {
        alpha: 0
      }
    };
  }

  static get properties() {
    return [...super.properties, 'backgroundType'];
  }

  static get tags() {
    return [...super.tags, 'Loader', 'DropShadow'];
  }

  _construct() {
    super._construct();
    this._createDropShadow = this.styles.shadow;
  }

  _setIcon(src) {
    return src ? { ...this._iconStyles, src } : null;
  }

  _updateDropShadow() {
    const DropShadow = this._createDropShadow({
      w: this.w,
      h: this.h,
      borderRadius: this._stylesRadius
    });
    this._DropShadow.patch(DropShadow);
    const alpha = Number(this.hasFocus());
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this.styles.getFocusScale(this.w, this.h)
      : 1;
    if (this._smooth) {
      this.smooth = { scale };
    } else {
      this.scale = scale;
    }
  }

  _updateLoader() {
    if (!(this.title || this.icon)) {
      this.patch({ color: 0x00 });
      this._Title.patch({ texture: false });
      this._Stroke.patch({ texture: false });
      this._Loader.patch({
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h - 2),
          this._stylesRadius
        )
      });
      if (this._loading) this._loading.start();
    } else {
      this._Loader.patch({ texture: false });
      if (this._loading) this._loading.stop();
    }
  }

  _update() {
    if (this._readyForUpdates) {
      this._updateDropShadow();
      this._updateScale();
      this._updateLoader();
      if (this.title || this.icon) super._update();
    }
  }

  _firstEnable() {
    this._loading = this._Loader.animation({
      duration: 2,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
    });
    this._loading.start();
    super._firstEnable && super._firstEnable();
  }

  _setBackgroundType(backgroundType) {
    if (this._backgroundType !== backgroundType) {
      if (this.styles) {
        const background =
          this.styles.backgrounds[backgroundType] ||
          this.styles.backgrounds.float;
        this.background = background;
        this.stroke = backgroundType === 'stroke';

        if (this.stroke) {
          this.strokeWeight = this.styles.stroke.weight;
          this.strokeColor = this.styles.stroke.color;
        }
      }
      return backgroundType;
    }
  }
}

export default class ActionButton extends ActionButtonBase {}
