import Base from '../../Base';
import * as styles from './Surface.styles';
import { withExtensions } from '../../mixins';
import lng from '@lightningjs/core';

class Surface extends Base {
  static _template() {
    return {
      Background: {}
    };
  }

  static get __componentName() {
    return 'Surface';
  }

  static get __themeStyles() {
    return styles;
  }

  static get tags() {
    return ['Background'];
  }

  get innerH() {
    return this.h;
  }

  get innerW() {
    return this.w;
  }

  _update() {
    this._updateLayout();
    this._updateScale();
  }

  _updateLayout() {
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        this.innerW - 2, // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2,
        this.style.radius,
        0,
        null,
        true,
        this.style.backgroundColor
      )
    });
  }

  _updateScale() {
    this.applySmooth(
      this,
      { scale: this.style.scale(this.w, this.h) },
      {
        scale: [this.style.scale(this.w, this.h), this.style.animation]
      }
    );
  }
}

export default withExtensions(Surface);
