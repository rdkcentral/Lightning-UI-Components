import lng from '@lightningjs/core';
import Base from '../Base';
import styles from './Tag.styles';
import { withStyles } from '../../mixins';
import { getValidColor } from '../../Styles';

export default class Tag extends withStyles(Base, styles) {
  static _template() {
    return {
      Background: {},
      Text: {
        text: {
          ...this.styles.title
        }
      }
    };
  }

  static get properties() {
    return [
      'backgroundColor',
      'gradientColor',
      'radius',
      'title',
      'titleColor'
    ];
  }

  static get tags() {
    return ['Background', 'Text'];
  }

  _construct() {
    super._construct();
    this._radius = this.styles.radius;
    this._titleStyles = this.styles.title;
    this._paddingX = this.styles.padding.x;
    this._paddingY = this.styles.padding.y;
  }

  _init() {
    this.w = 60;
    this.h = 40;
    super._init();
  }

  _attach() {
    this._Text.on('txLoaded', this._updateBackground.bind(this));
  }

  _detach() {
    this._Text.off('txLoaded', this._updateBackground.bind(this));
  }

  _update() {
    this._updateText();
    this._Text.on('txLoaded', () => {
      this._Text.removeAllListeners();
      this._updateBackground();
    });
  }

  _updateText() {
    this._Text.patch({
      text: {
        text: this.title,
        textColor: this.titleColor || getValidColor('#ffffff')
      }
    });
    this._Text.x = this._paddingX;
    this._Text.y = this._paddingY;
  }

  _updateBackground() {
    this.w = Math.max(this._Text.renderWidth + 32, 60);
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2,
        this.h - 2,
        this.radius,
        0,
        null,
        true,
        this.backgroundColor || getValidColor('#232328')
      )
    });
    if (this.gradientColor) {
      this._Background.colorRight = getValidColor(this.gradientColor);
    }
  }

  _setBackgroundColor(color) {
    return getValidColor(color);
  }

  _setTitleColor(color) {
    return getValidColor(color);
  }
}
