import { RoundRect, getFirstNumber } from '../../utils';
import Base from '../../elements/Base';
import baseStyles from './ListItemBase.styles.js';
import withStyles from '../../mixins/withStyles';
import lng from '@lightningjs/core';
export default class ListItemBase extends withStyles(Base, baseStyles) {
  static _template() {
    return {
      Container: {
        flex: {
          alignContent: 'center',
          alignItems: 'center',
          direction: 'row',
          justifyContent: 'space-between',
          paddingLeft: this.styles.paddingLeft,
          paddingRight: this.styles.paddingRight,
          wrap: true
        },
        Left: { flex: { direction: 'column' }, zIndex: 2 },
        Right: { flex: { direction: 'column' }, zIndex: 2 }
      }
    };
  }

  static get properties() {
    return ['size', 'backgroundType'];
  }

  static get tags() {
    return [
      'Container',
      { name: 'Left', path: 'Container.Left' },
      { name: 'Right', path: 'Container.Right' }
    ];
  }

  _update() {
    super._update();
    this._updateContainer();
    this._updateScale();
    this._updateDropShadow();
    this._updateBackground();
  }

  _updateContainer() {
    // Draw the background container
    this.w =
      this.w ||
      this.styles.dimensions[this.size] ||
      this.styles.dimensions.large;

    this.h = this.h || this.styles.h;

    const color = getFirstNumber(
      this.styles.backgrounds[this.backgroundType],
      this.styles.backgrounds.fill
    );

    const texture = lng.Tools.getRoundRect(
      RoundRect.getWidth(this.w, {
        paddingLeft: this.styles.paddingLeft,
        paddingRight: this.styles.paddingRight,
        strokeWidth: this.styles.strokeWidth
      }),
      RoundRect.getHeight(this.h, { strokeWidth: this.styles.strokeWidth }),
      this.styles.radius
    );

    this._Container.patch({
      color,
      texture,
      h: this.h
    });
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this.styles.focused.scale(this.w, this.h)
      : this.styles.unfocused.scale(this.w, this.h);
    this._Container.smooth = { scale };
  }

  _updateBackground() {
    if (this.hasFocus()) {
      if (this._smooth) {
        this._Container.smooth = {
          color: this.styles.backgrounds.focus
        };
      } else {
        this._Container.patch({
          color: this.styles.backgrounds.focus
        });
      }
    } else {
      if (this._smooth) {
        this._Container.smooth = {
          color: getFirstNumber(
            this.styles.backgrounds[this.backgroundType],
            this.styles.backgrounds.fill
          )
        };
      } else {
        this._Container.patch({
          color: getFirstNumber(
            this.styles.backgrounds[this.backgroundType],
            this.styles.backgrounds.fill
          )
        });
      }
    }
  }
  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  _updateDropShadow() {
    if (this.hasFocus() && !this._DropShadow) {
      this._Container.patch({
        DropShadow: {
          zIndex: 1,
          alpha: 0,
          flexItem: false,
          ...this.styles.shadow({
            w: this.w,
            h: this.h,
            borderRadius: this.styles.radius
          })
        }
      });
    }

    if (this._DropShadow) {
      const alpha = Number(this.hasFocus());
      if (this._smooth) {
        this._DropShadow.smooth = { alpha };
      } else {
        this._DropShadow.alpha = alpha;
      }
    }
  }
}
