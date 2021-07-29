import withStyles from '../../mixins/withStyles';
import Base from '../Base';
import Icon from '../Icon';
import styles from './Badge.styles';

export default class Badge extends withStyles(Base, styles) {
  static _template() {
    return {
      BadgeText: {},
      Icon: {
        type: Icon
      }
    };
  }

  static get properties() {
    return [
      'background',
      'icon',
      'iconHeight',
      'iconWidth',
      'padding',
      'textPosition',
      'textProperties',
      'title'
    ];
  }

  static get tags() {
    return ['BadgeText', 'Icon'];
  }

  _construct() {
    super._construct();
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
      alpha: this.title || this._Icon ? 1 : 0
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
      ...this.textPosition,
      text: {
        ...this.textProperties,
        text: this.title || ''
      }
    });
  }

  _updateIcon() {
    this._Icon.on('txLoaded', () => {
      this._Icon.removeAllListeners();
      this._calculatePadding();
    });
    this._Icon.patch({
      icon: this.icon,
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
        this._Icon.x = this.padding;
        this._BadgeText.x = this._Icon.x + this._Icon.w;
      } else if (this.iconAlign === 'right') {
        this._BadgeText.x = this.padding;
        this._Icon.x = this._BadgeText.x + this._BadgeText.renderWidth;
      }
    }

    this.w =
      this._BadgeText.renderWidth + this.padding * 2 + (this._Icon.w || 0);

    this.fireAncestors('$loadedBadge', this);
  }
}
