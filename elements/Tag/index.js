import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './Tag.styles';
import TextBox from '../TextBox';

class Tag extends Base {
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
    return 'Tag';
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
      textColor: this._componentStyles.titleColor,
      textStyle: this._componentStyles.textStyle
    });
  }

  _updateBackground() {
    this._Text.x = this.w / 2;
    this._Text.y = this.h / 2;
    this.h = !this.title
      ? 0
      : this._Text.renderHeight + 2 * this._componentStyles.paddingY;
    this.w = !this.title
      ? 0
      : this._Text.renderWidth + 2 * this._componentStyles.paddingX;
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2,
        this.h - 2,
        [
          this._componentStyles.radiusTopLeft,
          this._componentStyles.radiusTopRight,
          this._componentStyles.radiusBottomRight,
          this._componentStyles.radiusBottomLeft
        ],
        0,
        null,
        true,
        this._componentStyles.backgroundColor
      )
    });
  }
}

export default withExtensions(withStyles(Tag, styles));
