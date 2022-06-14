import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import { Bubble } from '../../textures';
import { TextBox } from '../';
import Base from '../../Base';
import styles from './Tooltip.styles';

class Tooltip extends Base {
  static get __componentName() {
    return 'Tooltip';
  }
  static _template() {
    return {
      alpha: 0,
      scale: 0.5,
      mountX: 0.5,
      x: w => w / 2,
      Background: {
        Text: {
          type: TextBox,
          signals: {
            textBoxChanged: '_textLoaded'
          }
        }
      }
    };
  }

  static get properties() {
    return ['title', 'delayVisible', 'timeVisible'];
  }

  static get tags() {
    return ['Background', { name: 'Text', path: 'Background.Text' }];
  }

  _update() {
    this._updateText();
  }

  _updateText() {
    this._Text.patch({
      content: this.title,
      textStyle: this._componentStyles.textStyle,
      textColor: this._componentStyles.textColor
    });
  }

  _textLoaded() {
    this._updateBackground();
    this._updateTextPosition();
  }

  _updateBackground() {
    const backgroundH =
      this._Text.finalH +
      this._componentStyles.paddingY * 2 +
      this._componentStyles.pointerH;
    const backgroundW = this._Text.finalW + this._componentStyles.paddingX * 2;

    this.patch({
      w: backgroundW,
      h: backgroundH,
      mountY: 1,
      y: -this._componentStyles.marginBottom,
      Background: {
        w: backgroundW,
        h: backgroundH,
        texture: {
          type: Bubble,
          w: backgroundW,
          h: backgroundH,
          radius: this._componentStyles.radius,
          pointerW: this._componentStyles.pointerW,
          pointerH: this._componentStyles.pointerH,
          color: this._componentStyles.backgroundColor
        }
      }
    });
  }

  _updateTextPosition() {
    this._Text.patch({
      mount: 0.5,
      x: this._Background.w / 2,
      y: (this._Background.h - this._componentStyles.pointerH) / 2
    });
  }

  _clearTimers() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);
  }

  _transitionIn() {
    const smooth = {
      smooth: {
        alpha: [1, this._componentStyles.transition],
        scale: [1, this._componentStyles.transition]
      }
    };

    if (this.delayVisible) {
      this._showTimer = setTimeout(() => {
        this.patch({ smooth });
      }, this.delayVisible);
    } else {
      this._showTimer = undefined;
      this.patch({ smooth });
    }

    this._hideTimer = this.timeVisible
      ? setTimeout(() => {
          this._unfocus();
        }, this.timeVisible + (this.delayVisible || 0))
      : undefined;
  }

  _transitionOut() {
    this.patch({
      smooth: {
        alpha: [0, this._componentStyles.transition],
        scale: [0.5, this._componentStyles.transition]
      }
    });
  }

  _focus() {
    this._clearTimers();
    this._transitionIn();
  }

  _unfocus() {
    this._clearTimers();
    this._transitionOut();
  }
}

export default withExtensions(withStyles(Tooltip, styles));
