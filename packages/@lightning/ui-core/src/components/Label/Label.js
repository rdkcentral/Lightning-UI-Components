import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Label.styles.js';

class Label extends Base {
  static _template() {
    return {
      Background: {},
      Text: {
        mountY: 0.5,
        mountX: 0.5,
        text: {}
      }
    };
  }

  static get __componentName() {
    return 'Label';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return ['Background', 'Text'];
  }

  _init() {
    this._Text.on('txLoaded', this._updateBackground.bind(this));
    super._init();
  }

  _update() {
    this._updateBackground();
    this._updateText();
  }

  _updateText() {
    if (this._Text) {
      this._Text.patch({
        text: {
          ...this.style.textStyle,
          text: this.title
        }
      });
    }
  }

  _updateBackground() {
    this._Text.x = this.w / 2;
    this._Text.y = this.h / 2 + this.style.offsetY;

    this.h = !this.title
      ? 0
      : this._Text.renderHeight + 2 * this.style.paddingY;
    this.w = !this.title ? 0 : this._Text.renderWidth + 2 * this.style.paddingX;

    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2,
        this.h - 2,
        this.style.radius,
        0,
        null,
        true,
        this.style.backgroundColor
      )
    });
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.text.text);
  }
}

export default withExtensions(Label);
