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
  minWidth: 410,
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
  shadow: theme.materials.glow,
  icon: {
    color: theme.palette.text.light.primary,
    size: theme.sizes.icon.medium,
    spacing: theme.spacing(1)
  },
  loading: {
    color: getHexColor('ffffff', 24)
  },
  stroke: {
    weight: 2,
    color: theme.palette.grey[5]
  },
  focused: {
    background: { color: theme.palette.background.focus },
    icon: { color: theme.palette.text.dark.primary },
    text: { color: theme.palette.text.dark.primary }
  }
});

class ActionButtonBase extends Button {
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

  _setIcon(src) {
    return src ? { ...this.styles.icon, src } : null;
  }

  _updateDropShadow() {
    const DropShadow = this.styles.shadow({
      w: this.w,
      h: this.h,
      borderRadius: this.styles.radius
    });
    this._DropShadow.patch(DropShadow);
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
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h - 2),
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

class ActionButton extends withStyles(ActionButtonBase, styles) {}

export default ActionButton;

export const largeStyles = theme => ({
  h: 96,
  minWidth: 320,
  text: theme.typography.headline1,
  icon: {
    size: theme.sizes.icon.large
  }
});

export const ActionButtonLarge = withStyles(
  class ActionButtonLarge extends ActionButton {},
  largeStyles
);

export const iconLargeStyles = () => ({
  h: 96,
  w: 96
});

export const ActionButtonIconLarge = withStyles(
  class ActionButtonIconLarge extends ActionButtonLarge {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  iconLargeStyles
);

export const ActionButtonMedium = class ActionButtonMedium extends ActionButton {};

export const iconMediumStyles = () => ({
  h: 72,
  w: 72
});

export const ActionButtonIconMedium = withStyles(
  class ActionButtonIconMedium extends ActionButtonMedium {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  iconMediumStyles
);

export const smallStyles = theme => ({
  h: 64,
  minWidth: 185,
  text: theme.typography.button2,
  icon: {
    size: theme.sizes.icon.small
  }
});

export const ActionButtonSmall = withStyles(
  class ActionButtonSmall extends ActionButton {},
  smallStyles
);

export const iconSmallStyles = () => ({
  h: 64,
  w: 64
});

export const ActionButtonIconSmall = withStyles(
  class ActionButtonIconSmall extends ActionButtonSmall {
    _construct() {
      super._construct();
      this._fixed = true;
    }
  },
  iconSmallStyles
);

export const xSmallStyles = theme => ({
  h: 48,
  minWidth: 152,
  text: theme.typography.button2,
  icon: {
    size: theme.sizes.icon.small
  }
});

export const ActionButtonXsmall = withStyles(
  class ActionButtonXsmall extends ActionButton {},
  xSmallStyles
);
