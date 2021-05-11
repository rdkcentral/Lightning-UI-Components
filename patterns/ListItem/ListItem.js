import lng from '@lightningjs/core';
import Icon from '../../elements/Icon';
import { RoundRect, getFirstNumber } from '../../utils';
import withStyles from '../../mixins/withStyles';
import { getFocusScale } from '../../Styles';

export const baseStyles = theme => ({
  h: 88,
  backgrounds: theme.palette.background,
  backgroundType: 'fill',
  dimensions: {
    large: 860,
    small: 410
  },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  strokeWidth: 2,
  radius: theme.border.radius.small,
  focused: {
    scale: theme.getFocusScale
  },
  unfocused: {
    scale: () => 1
  },
  shadow: theme.materials.glow
});

export class ListItemBase extends withStyles(
  class extends lng.Component {
    static _template() {
      return {
        h: this.styles.h,
        backgroundType: 'fill',
        color: this.styles.backgrounds.fill,
        Container: {
          flex: {
            direction: 'row',
            wrap: true,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: this.styles.paddingLeft,
            paddingRight: this.styles.paddingRight
          },
          Left: { flex: { direction: 'column' }, zIndex: 2 },
          Right: { flex: { direction: 'column' }, zIndex: 2 }
        }
      };
    }

    _init() {
      this.w =
        this.w ||
        this.styles.dimensions[this.size] ||
        this.styles.dimensions.large;
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
        texture
      });

      this._update();
    }

    _update() {
      this._updateScale();
      this._updateDropShadow();
      this._updateBackground();
    }

    _updateBackground() {
      if (this._focused) {
        this._Container.smooth = {
          color: this.styles.backgrounds.focus
        };
      } else {
        this._Container.smooth = {
          color: getFirstNumber(
            this.styles.backgrounds[this.backgroundType],
            this.styles.backgrounds.fill
          )
        };
      }
    }

    _updateScale() {
      const scale = this.hasFocus()
        ? this.styles.focused.scale(this.w)
        : this.styles.unfocused.scale(this.w);

      if (this._smooth) {
        this._Container.smooth = { scale };
      } else {
        this._Container.scale = scale;
      }
    }

    _updateDropShadow() {
      if (this._focused && !this._DropShadow) {
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
        const alpha = Number(this._focused);
        if (this._smooth) {
          this._DropShadow.smooth = { alpha };
        } else {
          this._DropShadow.alpha = alpha;
        }
      }
    }

    _handleEnter() {
      if (typeof this.onEnter === 'function') {
        this.onEnter(this);
      }
    }

    _focus() {
      if (this._smooth === undefined) this._smooth = true;
      this._focused = true;
      this._update();
    }

    _unfocus() {
      this._focused = false;
      this._update();
    }

    get announce() {
      return this._announce
        ? this._announce
        : this.title + ` ${this.subtitle !== undefined ? this.subtitle : ''}`;
    }

    set announce(announce) {
      if (this._announce !== announce) {
        this._announce = announce;
        this._update();
      }
    }

    get _Container() {
      return this.tag('Container');
    }

    get _DropShadow() {
      return this.tag('DropShadow');
    }

    get _Left() {
      return this._Container.tag('Left');
    }

    get _Right() {
      return this._Container.tag('Right');
    }
  },
  baseStyles
) {}

export const styles = theme => ({
  icon: {
    width: 40,
    height: 40,
    color: theme.palette.text.light.primary
  },
  title: {
    color: theme.palette.text.light.primary,
    text: {
      ...theme.typography.button1,
      verticalAlign: 'top'
    }
  },
  subtitle: {
    color: theme.palette.text.light.secondary,
    text: {
      ...theme.typography.body3,
      verticalAlign: 'top'
    }
  },
  focused: {
    icon: {
      color: theme.palette.text.dark.primary
    },
    title: {
      color: theme.palette.text.dark.primary
    },
    subtitle: {
      color: theme.palette.text.dark.secondary
    }
  }
});

export default class ListItem extends withStyles(ListItemBase, styles) {
  _init() {
    super._init();

    const left = {};
    const right = {};

    if (this.icon !== undefined) {
      right.flex = {
        direction: 'row'
      };

      [...(Array.isArray(this.icon) ? this.icon : [this.icon])].forEach(
        (icon, index) => {
          right[`Icon${index || ''}`] = {
            type: Icon,
            h: this.styles.icon.height,
            w: this.styles.icon.width,
            color: this.styles.icon.color,
            icon
          };
        }
      );
    }

    this._Left.patch({ ...left });
    this._Right.patch({ ...right });
    !this.hasFocus() && this._unfocus();
    this._update();
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateSubtitle();
    this._updateIcons();
  }

  _focus() {
    super._focus();
    this._update();
  }

  _unfocus() {
    super._unfocus();
    this._update();
  }

  _getTitleW() {
    const w =
      this.w ||
      this.styles.dimensions[this.size] ||
      this.styles.dimensions.large;

    return (
      w - this.styles.paddingLeft - this.styles.paddingRight - this._rightOffset
    );
  }

  _updateTitle() {
    if (this._focused) {
      this._Title &&
        this._Title.setSmooth('color', this.styles.focused.title.color);
    } else {
      this._Title && this._Title.setSmooth('color', this.styles.title.color);
    }
  }

  _updateSubtitle() {
    if (this._focused) {
      this._Subtitle &&
        this._Subtitle.setSmooth('color', this.styles.focused.subtitle.color);
    } else {
      this._Subtitle &&
        this._Subtitle.setSmooth(
          'color',
          this.collapse ? 0 : this.styles.subtitle.color
        );

      this.collapse &&
        this._Subtitle &&
        this._Left.setSmooth('y', this._Subtitle.renderHeight / 2);
    }
  }

  _updateIcons() {
    if (this._focused) {
      (this._icons || []).length &&
        this._icons.forEach(icon =>
          icon.setSmooth('color', this.styles.focused.icon.color)
        );

      this._Left.smooth = { y: 0 };

      if (this._collapseIcon) {
        this._Right.alpha = 1;
      }
    } else {
      (this._icons || []).length &&
        this._icons.forEach(icon =>
          icon.setSmooth('color', this.styles.icon.color)
        );

      if (this._collapseIcon) {
        this._Right.alpha = 0;
      }
    }
  }

  set collapseIcon(hide) {
    if (this._collapseIcon !== hide) {
      this._collapseIcon = hide;
    }
    this._update();
  }

  set title(title) {
    this._title = title;
    this._Left.patch({
      Title: {
        y: 2,
        h: this.styles.title.text.lineHeight + 4,
        color: this.styles.title.color,
        text: {
          ...this.styles.title.text,
          wordWrapWidth: this._getTitleW(),
          maxLines: 1,
          maxLinesSuffix: '...',
          text: title
        }
      }
    });
    this._update();
  }

  set subtitle(subtitle) {
    this._subtitle = subtitle;
    if (subtitle) {
      this._Left.patch({
        Title: {},
        Subtitle: {
          h: this.styles.subtitle.text.lineHeight,
          text: {
            ...this.styles.subtitle.text,
            text: subtitle
          }
        }
      });
    } else {
      this._Left.patch({ Subtitle: undefined });
    }

    this.hasFocus() ? this._focus() : this._unfocus();
    this._refocus();
  }

  get _Title() {
    return this._Left.tag('Title');
  }

  get _Subtitle() {
    return this._Left.tag('Subtitle');
  }

  get _Icon() {
    return this._Right.tag('Icon');
  }

  get _icons() {
    return this._Right.children;
  }

  get _rightOffset() {
    if (this.icon !== undefined) {
      return (
        [...(Array.isArray(this.icon) ? this.icon : [this.icon])].length *
          this.styles.icon.width +
        16
      );
    }
    return 0;
  }

  get title() {
    return this._title;
  }

  get subtitle() {
    return this._subtitle;
  }
}
