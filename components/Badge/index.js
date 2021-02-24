import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';

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
  }
});

class Badge extends lng.Component {
  static _template() {
    return {
      BadgeText: {}
    };
  }

  _construct() {
    this._textPosition = this.styles.textPosition;
    this._textProperties = this.styles.textProperties;
    this._background = this.styles.background;
    this._padding = this.styles.padding;
  }

  _init() {
    this._update();
    this._BadgeText.on('txLoaded', () => {
      this.h =
        this.styles.background.h ||
        this._BadgeText.renderHeight + this._padding * 2;
      this.w = this._BadgeText.renderWidth + this._padding * 2;
      this.fireAncestors('$loadedBadge', this);
    });
  }

  _update() {
    this.patch({
      ...this._background,
      BadgeText: {
        ...this._textPosition,
        text: {
          ...this._textProperties,
          text: this._title
        }
      },
      alpha: this._title ? 1 : 0
    });
  }

  set title(title) {
    this._title = title;
    this._update();
  }

  get title() {
    return this._title;
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
}

export default withStyles(Badge, styles);
