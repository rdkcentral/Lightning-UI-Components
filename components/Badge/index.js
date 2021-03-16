import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import Icon from '../Icon';

export const styles = theme => ({
  padding: theme.spacing(1),
  background: {
    h: theme.spacing(4),
    rect: true,
    shader: {
      type: lng.shaders.RoundedRectangle,
      radius: theme.border.radius.xsmall
    },
    color: theme.palette.badge.default
  },
  textPosition: {
    x: theme.spacing(1),
    y: 1
  },
  textProperties: {
    ...theme.typography.caption,
    color: theme.palette.text.light.primary,
    textAlign: 'center'
  },
  iconAlign: 'left'
});

class Badge extends lng.Component {
  static _template() {
    return {
      BadgeText: {},
      Icon: {
        type: Icon
      }
    };
  }

  _construct() {
    this._textPosition = this.styles.textPosition;
    this._textProperties = this.styles.textProperties;
    this._background = this.styles.background;
    this._padding = this.styles.padding;
    this._iconH = this._background.h - this._padding * 2;
    this.iconAlign = this.styles.iconAlign;
  }

  _init() {
    this._update();
  }

  _update() {
    this.patch({
      ...this._background,
      alpha: this._title || this._Icon ? 1 : 0
    });
    this._updateText();
    this._updateIcon();
  }

  _updateText() {
    this._BadgeText.on('txLoaded', () => {
      this._BadgeText.removeAllListeners();
      this._calculatePadding();
    });
    this._BadgeText.patch({
      ...this._textPosition,
      text: {
        ...this._textProperties,
        text: this._title || ''
      }
    });
  }

  _updateIcon() {
    this._Icon.on('txLoaded', () => {
      this._Icon.removeAllListeners();
      this._calculatePadding();
    });
    this._Icon.patch({
      icon: this._icon,
      w: this.iconWidth,
      h: this.iconHeight
    });
  }

  _calculateIconRatio() {
    if (this.iconWidth && this.iconHeight) {
      // use provided dimensions - required for SVGs
      return this.iconWidth / this.iconHeight;
    } else {
      // fallback to rendered dimensions - PNGs only
      return this._Icon.finalW / this._Icon.finalH;
    }
  }

  _calculatePadding() {
    this.h =
      this._background.h || this._BadgeText.renderHeight + this._padding * 2;

    const iconRatio = this._calculateIconRatio();

    // use iconRatio here to prevent a bug causing a PNG's ratio to be calculated incorrectly
    if (iconRatio) {
      // set icon dimensions
      this._Icon.h = this._iconH;
      this._Icon.w = this._iconH * iconRatio;
      this._Icon.y = (this.h - this._Icon.h) / 2;

      // set icon and text position
      if (this.iconAlign === 'left') {
        this._Icon.x = this._padding;
        this._BadgeText.x = this._Icon.x + this._Icon.w;
      } else if (this.iconAlign === 'right') {
        this._BadgeText.x = this._padding;
        this._Icon.x = this._BadgeText.x + this._BadgeText.renderWidth;
      }
    }

    this.w =
      this._BadgeText.renderWidth + this._padding * 2 + (this._Icon.w || 0);

    this.fireAncestors('$loadedBadge', this);
  }

  set title(title) {
    this._title = title;
    this._update();
  }

  get title() {
    return this._title;
  }

  set icon(icon) {
    this._icon = icon;
    this._update();
  }

  get icon() {
    return this._icon;
  }

  set iconHeight(iconHeight) {
    this._iconHeight = iconHeight;
    this._update();
  }

  get iconHeight() {
    return this._iconHeight;
  }

  set iconWidth(iconWidth) {
    this._iconWidth = iconWidth;
    this._update();
  }

  get iconWidth() {
    return this._iconWidth;
  }

  set background(background) {
    this._background = background;
    this._update();
  }

  get background() {
    return this._background;
  }

  set textPosition(textPosition) {
    this._textPosition = textPosition;
    this._update();
  }

  get textPosition() {
    return this._textPosition;
  }

  set textProperties(textProperties) {
    this._textProperties = textProperties;
    this._update();
  }

  get textProperties() {
    return this._textProperties;
  }

  set padding(padding) {
    this._padding = padding;
    this._update();
  }

  get padding() {
    return this._padding;
  }

  get _BadgeText() {
    return this.tag('BadgeText');
  }

  get _Icon() {
    return this.tag('Icon');
  }
}

export default withStyles(Badge, styles);
