/**
 * Action Button Component
 *
 * Action Button Class that contains styling and functionality for all Action Button items
 */
import lng from 'wpe-lightning';
import Button from '../Button';
import withStyles from '../../mixins/withStyles';
import { RoundRect } from '../../utils';

// styles
import { getHexColor, getFocusScale } from '../Styles';

export const styles = theme => ({
  w: 410,
  h: 72,
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button1,
    color: theme.palette.text.light.primary
  },
  padding: theme.spacing(2),
  shadow: theme.shadow,
  icon: {
    color: theme.palette.text.light.primary,
    size: 32,
    spacing: theme.spacing(2)
  },
  loading: {
    color: getHexColor('ffffff', 24)
  },
  stroke: {
    weight: 2,
    color: theme.palette.grey[5]
  },
  unfocus: {
    patch: function() {
      let scale = 1;
      this.patch({
        stroke: this.backgroundType === 'stroke',
        strokeColor: this.styles.stroke.color,
        strokeWeight: this.styles.stroke.weight,
        smooth: {
          color:
            this.styles.backgrounds[this.backgroundType] ||
            this.styles.backgrounds.float,
          scale
        },
        Content: {
          Title: { smooth: { color: this.styles.text.color } },
          Icon: { smooth: { color: this.styles.icon.color } }
        },
        DropShadow: { smooth: { alpha: 0, scaleX: 1 } }
      });
    }
  },
  focus: {
    patch: function() {
      let scale = getFocusScale(this.w);
      this.patch({
        smooth: { color: theme.palette.background.focus, scale },
        stroke: false,
        Content: {
          Title: { smooth: { color: theme.palette.text.dark.primary } },
          Icon: { smooth: { color: theme.palette.text.dark.primary } }
        },
        DropShadow: {
          smooth: {
            alpha: 1
          }
        }
      });
    }
  }
});

class ActionButton extends Button {
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
        color: this.styles.loading.color,
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.styles.w),
          RoundRect.getHeight(this.styles.h),
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

  get icon() {
    return this._icon;
  }

  set icon(src) {
    if (src) {
      this._icon = { ...this.styles.icon, src };
    } else {
      this._icon = null;
    }
    this._update();
  }

  _update() {
    this._whenEnabled.then(() => {
      if (this.w !== this.styles.w) {
        const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
        this._DropShadow.patch(DropShadow);
      }

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
        super._update();
      }
    });
  }

  _firstEnable() {
    this._loading = this._Loader.animation({
      duration: 2,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
    });
    this._loading.start();
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
      }
      this._update();
    }
  }

  get _Loader() {
    return this.tag('Loader');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}

export default withStyles(ActionButton, styles);
