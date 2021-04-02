/**
 * Pivot Button Component
 *
 * Pivot Class that contains styling and functionality for all pivot items.
 * These buttons are dynmaically sized.
 */
import lng from '@lightningjs/core';
import Button from '../Button';
import { RoundRect } from '../../utils';
import withStyles from '../../mixins/withStyles';
import { getHexColor, getFocusScale } from '../../Styles';

export const styles = theme => ({
  w: 185,
  h: 48,
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  shadow: theme.materials.glow,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button2,
    color: theme.palette.text.light.primary
  },
  icon: {
    size: 32,
    spacing: theme.spacing(1)
  },
  loading: {
    color: getHexColor('ffffff', 24)
  },
  stroke: {
    weight: 2,
    color: theme.palette.grey[10]
  },
  padding: theme.spacing(2),
  focused: {
    background: { color: theme.palette.background.focus },
    icon: { color: theme.palette.text.focus },
    text: { color: theme.palette.text.focus }
  }
});

class Pivot extends Button {
  static _template() {
    return {
      ...super._template(),
      w: this.styles.w,
      h: this.styles.h,
      padding: this.styles.padding,
      radius: this.styles.radius,
      text: this.styles.text,
      focus: this.styles.focus,
      unfocus: this.styles.unfocus,
      backgroundType: 'float',
      Loader: {
        x: 0,
        y: 0,
        color: this.styles.loading.color,
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.styles.w),
          RoundRect.getHeight(this.styles.h - 2),
          this.styles.radius
        )
      },
      DropShadow: {
        alpha: 0,
        ...this.styles.shadow({
          w: this.styles.w,
          h: this.styles.h
        })
      }
    };
  }

  _setIcon(src) {
    return src ? { ...this.styles.icon, src } : null;
  }

  _updateDropShadow() {
    if (this.w !== this.styles.w) {
      const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
      this._DropShadow.patch(DropShadow);
    }

    const alpha = Number(this._focused);
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
  }

  _updateScale() {
    const scale = this._focused ? getFocusScale(this.w) : 1;
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
          RoundRect.getWidth(this.styles.w),
          RoundRect.getHeight(this.styles.h - 2),
          this.styles.radius
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

  get backgroundType() {
    return this._backgroundType;
  }

  set backgroundType(backgroundType) {
    if (this._backgroundType !== backgroundType) {
      this._backgroundType = backgroundType;
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
        this._update();
      }
    }
  }

  get _Loader() {
    return this.tag('Loader');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}

export default withStyles(Pivot, styles);
