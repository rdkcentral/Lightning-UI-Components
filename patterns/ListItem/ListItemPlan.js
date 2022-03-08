import { ListItemRadio } from '.';
import TextBox from '../../elements/TextBox';
import styles from './ListItemPlan.styles.js';
import { withStyles } from '../../mixins';
import { Radio } from '../../elements';

export default class ListItemPlan extends withStyles(ListItemRadio, styles) {
  static get tags() {
    return [...super.tags, { name: 'Content', path: 'Left.Content' }];
  }

  static get properties() {
    return [...super.properties, 'content'];
  }

  _update() {
    super._update();

    this._updateRadio();
    this._updateContent();
  }

  _updateRadio() {
    this._Right.patch({
      h: h => h,
      Radio: {
        type: Radio,
        w: this.hasFocus() ? this.styles.focused.radio.w : this.styles.radio.w,
        h: this.hasFocus() ? this.styles.focused.radio.h : this.styles.radio.h,
        y: this.styles.paddingTop,
        flexItem: false // to adjust the Radio Button's location
      }
    });
  }

  _updateContent() {
    if (!this.content) {
      this._Left.patch({ Content: undefined });
      this._Left.smooth = { y: 0 };
      return;
    }

    if (!this._Content) {
      this._Left.patch({
        Content: {
          type: TextBox,
          flexItem: {
            marginTop: this.styles.content.flexItem.marginTop
          },
          signals: {
            textBoxChanged: '_updateComponentHeight'
          }
        }
      });
    }

    this._Left.patch({
      Content: {
        ...this.styles.content,
        textColor: this.hasFocus()
          ? this.styles.focused.content.color
          : this.styles.content.color,
        content: this._content,
        wordWrapWidth: this._textWidth
      }
    });
  }

  _updateComponentHeight() {
    const titleH = this._Title
      ? this._Title.renderHeight
      : this.styles.title.text.lineHeight;
    const subtitleH = this._Subtitle
      ? this._Subtitle.renderHeight
      : this.styles.subtitle.text.lineHeight;

    this.h =
      titleH +
      subtitleH +
      this._Content.renderHeight +
      this.styles.paddingTop +
      this.styles.content.flexItem.marginTop +
      this.styles.paddingBottom;

    this._update();
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    return [this.title, this.subtitle, this.content].filter(s => s).join('. ');
  }
}
