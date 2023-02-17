import { Bubble } from '../../textures/index.js';
import TextBox from '../TextBox/index.js';
import Base from '../Base/index.js';
import * as styles from './Tooltip.styles.js';

export default class Tooltip extends Base {
  static get __componentName() {
    return 'Tooltip';
  }

  static get __themeStyle() {
    return styles;
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
    if (this._Text) {
      this._Text.patch({
        content: this.title,
        style: { textStyle: this.style.textStyle }
      });
    }
  }

  _textLoaded() {
    this._updateBackground();
    this._updateTextPosition();
  }

  _updateBackground() {
    const backgroundH =
      this._Text.finalH + this.style.paddingY * 2 + this.style.pointerH;
    const backgroundW = this._Text.finalW + this.style.paddingX * 2;

    this.patch({
      w: backgroundW,
      h: backgroundH,
      mountY: 1,
      y: -this.style.marginBottom,
      Background: {
        w: backgroundW,
        h: backgroundH,
        texture: {
          type: Bubble,
          w: backgroundW,
          h: backgroundH,
          radius: this.style.radius,
          pointerW: this.style.pointerW,
          pointerH: this.style.pointerH,
          color: this.style.backgroundColor
        }
      }
    });
  }

  _updateTextPosition() {
    if (this._Text) {
      this._Text.patch({
        mount: 0.5,
        x: this._Background.w / 2,
        y: (this._Background.h - this.style.pointerH) / 2
      });
    }
  }

  _clearTimers() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);
  }

  _transitionIn() {
    const smooth = {
      smooth: {
        alpha: [1, this.style.transition],
        scale: [1, this.style.transition]
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
        alpha: [0, this.style.transition],
        scale: [0.5, this.style.transition]
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

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.announce);
  }
}
