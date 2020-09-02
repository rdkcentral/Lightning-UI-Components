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
        stroke: this.backgroundType === 'stroke' && this.stroke,
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
        Content: {
          Title: { smooth: { color: theme.palette.text.dark.primary } },
          Icon: { smooth: { color: theme.palette.text.dark.primary } }
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

  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  _init() {
    super._init();
    this._update();
  }

  get title() {
    return this._title;
  }

  set title(title) {
    super.title = title;
    this._update();
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
      const template = { Content: {}, Loader: {}, DropShadow: {} };

      if (this.w !== this.styles.w) {
        template.DropShadow = this.styles.shadow({ w: this.w, h: this.h });
      }

      if (!this.title) {
        template.color = 0x00;
        template.Content.Title = { texture: false };
      } else {
        template.Loader.color = 0x00;
        template.Loader.texture = false;
        if (this._loading) this._loading.stop();
        super._update();
      }
      this.patch(template);
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

  set backgroundType(backgroundType = 'float') {
    const isStroke = backgroundType === 'stroke';
    this._backgroundType = backgroundType = backgroundType;
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

export default withStyles(ActionButton, styles);
