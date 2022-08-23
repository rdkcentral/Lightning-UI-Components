import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import * as styles from './Label.styles';
import TextBox from '../TextBox';

class Label extends Base {
  static _template() {
    return {
      Background: {},
      Text: {
        type: TextBox,
        signals: {
          textBoxChanged: '_updateBackground'
        },
        mountY: 0.5,
        mountX: 0.5
      }
    };
  }

  static get __componentName() {
    return 'Label';
  }

  static get __themeStyles() {
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
    this._Text.patch({
      content: this.title,
      textStyle: this.style.textStyle
    });
  }

  _updateBackground() {
    this._Text.x = this.w / 2;
    this._Text.y = this.h / 2;
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
}

export default withExtensions(withStyles(Label, styles));
