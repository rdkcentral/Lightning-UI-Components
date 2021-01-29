import lng from '@lightningjs/core';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';

// styles
import { getFocusScale } from '../Styles';

export const styles = theme => ({
  background: {
    color: theme.palette.background.ghost
  },
  radius: theme.border.radius.medium,
  focusring: function ({ w, h, radius }) {
    return {
      type: FocusRing,
      w,
      h,
      radius,
      size: theme.spacing(1),
      focusRingAnimation: theme.animations.gradient,
      zIndex: -1
    };
  },
  unfocused: {
    scale: () => 1,
    focusring: { alpha: 0 }
  },
  focused: {
    scale: theme.getFocusScale,
    focusring: { alpha: 1 }
  }
});

class DataItem extends lng.Component {
  static _template() {
    return {
      Background: {
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        },
        rect: true,
        color: this.styles.background.color,
        zIndex: 1
      },
      Content: {
        zIndex: 2
      }
    };
  }

  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
    this._radius = this.styles.radius;
  }

  _init() {
    this._Background.w = this.w;
    this._Background.h = this.h;
    this._Content.w = this.w;
    this._Content.h = this.h;
    this._scaleX = getFocusScale(this.w);
    this._scaleY =
      (this.h + (this.w * getFocusScale(this.w) - this.w)) / this.h;
    this._update();
  }

  set backgroundImage(backgroundImage) {
    this._backgroundImage = backgroundImage;
    this._update();
  }

  set margin(margin) {
    if (typeof margin === 'object') {
      this._marginX = margin.x;
      this._marginY = margin.y;
    } else {
      this._marginX = margin;
      this._marginY = margin;
    }
    this._update();
  }

  set content(content) {
    this._Content.patch(content, true);
    this._update();
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateFocusRing();
      this._updateScale();
      this._updateMargins();
      this._updateBackgroundImg();
    });
  }

  _updateFocusRing() {
    if (!this._focusRing) {
      this._focusRing = this.styles.focusring({
        w: this.w,
        h: this.h,
        radius: this._radius
      });
    }
    let FocusRingComponent = this._focusRing;
    const style = this.hasFocus()
      ? this.styles.focused.focusring
      : this.styles.unfocused.focusring;
    if (this._smooth) {
      FocusRingComponent.smooth = style;
    } else {
      FocusRingComponent = { ...FocusRingComponent, ...style };
    }
    this.patch({ FocusRing: FocusRingComponent });
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this.styles.focused.scale(this.w)
      : this.styles.unfocused.scale(this.w);
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

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  get _Content() {
    return this.tag('Content');
  }
  get _Background() {
    return this.tag('Background');
  }
}

export default withStyles(DataItem, styles);
