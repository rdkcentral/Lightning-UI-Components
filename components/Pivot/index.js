/**
 * Pivot Button Component
 *
 * Pivot Class that contains styling and functionality for all pivot items.
 * These buttons are dynmaically sized.
 */
import lng from 'wpe-lightning';
import Button from '../Button';
import { RoundRect } from '../../utils';
import withStyles from '../../mixins/withStyles';
import { getHexColor } from '../Styles/Colors';

export const styles = theme => ({
  w: 185,
  h: 48,
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  shadow: theme.shadow,
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
    color: theme.palette.grey[5]
  },
  padding: theme.spacing(2),
  unfocus: {
    patch: function() {
      let scale = 1;
      this.patch({
        stroke: this.backgroundType === 'stroke' && this.stroke,
        smooth: {
          color:
            this.styles.backgrounds[this.backgroundType] ||
            theme.palette.background.float,
          scale
        },
        Content: {
          Title: { smooth: { color: theme.palette.text.light.primary } },
          Icon: { smooth: { color: theme.palette.text.light.primary } }
        },
        DropShadow: {
          smooth: {
            alpha: 0
          }
        }
      });
    }
  },
  focus: {
    patch: function() {
      let scale = theme.getFocusScale(this.w);
      if (!this._loading || !this._loading.isPlaying()) {
        this.patch({
          smooth: {
            color: theme.palette.background.focus,
            scale
          },
          Content: {
            Title: { smooth: { color: theme.palette.text.focus } },
            Icon: { smooth: { color: theme.palette.text.focus } }
          },
          DropShadow: {
            smooth: {
              alpha: 1
            }
          },
          Stroke: {
            texture: false
          }
        });
      }
    }
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

  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  get icon() {
    return this._icon;
  }

  set icon(src) {
    if (src) {
      this._icon = { ...this.styles.icon, src };
      this._update();
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      if (this.w !== this.styles.w) {
        const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
        this._DropShadow.patch(DropShadow);
      }

      if (!this.title) {
        this.patch({ color: 0x00 });
        this._Title.patch({ texture: false });
        this._Loader.patch({
          texture: lng.Tools.getRoundRect(
            RoundRect.getWidth(this.styles.w),
            RoundRect.getHeight(this.styles.h - 2),
            this.styles.radius
          )
        });
      } else {
        this._Loader.patch({ texture: false });
        if (this._loading) this._loading.stop();
        super._update();
      }
    });
  }

  _enable() {
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
    const isStroke = backgroundType === 'stroke';
    this._backgroundType = backgroundType;
    if (this.styles) {
      const background =
        this.styles.backgrounds[backgroundType] ||
        this.styles.backgrounds.float;
      const stroke = isStroke && this.styles.stroke;

      this.background = background;
      this.stroke = stroke;
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
