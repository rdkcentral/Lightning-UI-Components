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
  shadow: theme.shadow,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button2,
    textColor: theme.palette.text.light.primary
  },
  w: 185,
  h: 48,
  background: theme.palette.background,
  icon: {
    size: 32,
    spacing: theme.spacing(1)
  },
  loading: {
    color: getHexColor('ffffff', 24)
  },
  stroke: {
    color: theme.palette.grey[5]
  },
  padding: theme.spacing(2),
  unfocus: {
    patch: function() {
      let scale = 1;
      this.patch({
        smooth: {
          color:
            this.styles.background[this.background] ||
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
        }
      });
    }
  }
});

class Pivot extends Button {
  static _template() {
    return {
      ...super._template(),
      backgroundType: 'float',
      signals: {
        buttonWidthChanged: '_widthChanged'
      },
      theme: {
        w: this.styles.w,
        h: this.styles.h,
        padding: this.styles.padding,
        radius: this.styles.radius,
        text: this.styles.text,
        focus: this.styles.focus,
        unfocus: this.styles.unfocus
      },
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

  _init() {
    super._init();
    this._update();
  }

  set title(title) {
    super.title = title;
    this._update();
  }

  get title() {
    return this._title;
  }

  set icon(icon) {
    super.icon = {
      src: icon,
      size: this.styles.icon.size,
      spacing: this.styles.icon.spacing
    };
  }

  _widthChanged({ w }) {
    this.w = w;
    const shadow = this.styles.shadow({ w, h: this.styles.h });
    this._DropShadow.x = shadow.x;
    this._DropShadow.texture = shadow.texture;
    this.fireAncestors('$itemChanged');
  }

  _update() {
    const patch = {};
    if (!this._title) {
      patch.Loader = { alpha: 1 };
      this._loading = this._Loader.animation({
        duration: 2,
        repeat: -1,
        stopMethod: 'immediate',
        actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
      });
      this._loading.start();
    } else {
      const background =
        this.styles.background[this.backgroundType] ||
        this.styles.background.float;
      const loading = this._loading && this._loading.isPlaying();
      const stroke = this.backgroundType === 'stroke' && {
        weight: 2,
        color: this.styles.stroke.color
      };

      patch.background = background;
      patch.Loader = { alpha: 0 };
      if (stroke) patch.stroke = stroke;
      if (loading) this._loading.stop();
    }

    this.patch(patch);
  }

  get _Loader() {
    return this.tag('Loader');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}

export default withStyles(Pivot, styles);
