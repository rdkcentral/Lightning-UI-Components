import lng from '@lightningjs/core';
import { Base } from '../../elements';
import styles from './DataItem.styles';
import withStyles from '../../mixins/withStyles';

class DataItem extends Base {
  static _template() {
    return {
      Background: {
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        },
        rect: true,
        color: this.styles.background.color,
        zIndex: 2
      },
      Content: {
        zIndex: 3
      }
    };
  }

  static get properties() {
    return ['backgroundImage', 'margin', 'shouldAnimate'];
  }

  static get tags() {
    return ['FocusRing', 'Content', 'Background'];
  }

  _construct() {
    super._construct();
    this._radius = this.styles.radius;
    this._shouldAnimate = this.styles.shouldAnimate;
  }

  _init() {
    this._Content.w = this.w;
    this._Content.h = this.h;
    this._update();
  }

  _update() {
    this._Background.w = this.w;
    this._Background.h = this.h;
    this._whenEnabled.then(() => {
      // this._updateContent();
      this._updateFocusRing();
      this._updateScale();
      this._updateMargins();
      this._updateBackgroundImg();
    });
  }

  // TODO: After other components using DataItem are refactored,
  // add content to the properties array, remove the getter and setter
  // and uncomment the _updateContent method below and in _update
  set content(content) {
    if (this._content != content) {
      this._content = content;
      this._Content.patch(this._content, true);
      this._update();
    }
  }

  get content() {
    return this.content;
  }

  // _updateContent() {
  //   if (this.content) {
  //     this._Content.patch(this.content, true);
  //   }
  // }
  _updateFocusRing() {
    if (this.hasFocus() || this._FocusRing) {
      if (!this._FocusRing) {
        this.patch({ FocusRing: { type: this.styles.focusringType } });
      }

      this._FocusRing.patch({
        ...this.styles.focusring({
          w: this.w,
          h: this.h,
          radius: this._radius,
          color: this.focusRingColor
        })
      });

      const style = this.hasFocus()
        ? this.styles.focused.focusring
        : this.styles.unfocused.focusring;
      if (this._smooth) {
        this._FocusRing.smooth = style;
      } else {
        this._FocusRing.patch(style);
      }
      this._FocusRing._shouldAnimate = this.shouldAnimate;
      if (this.hasFocus()) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this.styles.focused.scale(this.w, this.h)
      : this.styles.unfocused.scale(this.w, this.h);
    if (this._smooth) {
      this.smooth = { scale };
    } else {
      this.scale = scale;
    }
  }

  _updateMargins() {
    this._Content.x = this._marginX || 0;
    this._Content.w = this.w - this._marginX * 2;
    this._Content.y = this._marginY || 0;
    this._Content.h = this.h - this._marginY * 2;
  }

  _updateBackgroundImg() {
    if (this._backgroundImage) {
      this._Background.src = this._backgroundImage;
      this._Background.resizeMode = { type: 'cover' };
    }
  }

  _setMargin(margin) {
    if (typeof margin === 'object') {
      this._marginX = margin.x;
      this._marginY = margin.y;
    } else {
      this._marginX = margin;
      this._marginY = margin;
    }
    return margin;
  }
}

export default withStyles(DataItem, styles);
