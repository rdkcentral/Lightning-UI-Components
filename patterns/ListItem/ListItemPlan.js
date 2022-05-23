import { ListItemRadio } from '.';
import TextBox from '../../elements/TextBox';
import styles from './ListItemPlan.styles.js';
import { withStyles } from '../../mixins';
import { Radio } from '../../elements';

export default class ListItemPlan extends withStyles(ListItemRadio, styles) {
  static get tags() {
    return [
      ...super.tags,
      { name: 'Content', path: 'Left.Content' },
      { name: 'Disclaimer', path: 'Left.Disclaimer' }
    ];
  }

  static get properties() {
    return [...super.properties, 'content', 'disclaimer'];
  }

  _update() {
    super._update();

    this._updateLayout();
    this._updateRadio();
    this._updateContent();
    this._updateDisclaimer();
  }

  // adjust the layout according to the new design's requirement
  _updateLayout() {
    this.w = this.styles.w;
    this.h = this.styles.h;

    this._Left.patch({
      flex: undefined, // In the new design, the components in _Left have fixed dimension,
      // thus using abs position is more convinient and less error-bias
      flexItem: { alignSelf: 'stretch' }
    });
  }

  // override
  get _textWidth() {
    return (
      this.w -
      this.styles.paddingLeft -
      32 - // the gap between _Left and _Right.Radio
      this._Right.renderWidth -
      this.styles.paddingRight
    );
  }

  // override
  _updateTitle() {
    if (!this._title) {
      this._Left.patch({ Title: undefined });
      return;
    }

    this._Left.patch({
      w: this._textWidth,
      Title: {
        ...this.styles.title,
        type: TextBox,
        w: this._textWidth,
        content: this._title,
        wordWrapWidth: this._textWidth,
        textColor: this.hasFocus()
          ? this.styles.focused.title.textColor
          : this.styles.title.textColor
      }
    });
  }

  // override
  _updateSubtitle() {
    if (!this.subtitle) {
      this._Left.patch({ Subtitle: undefined });
      this._Left.smooth = { y: 0 };
      return;
    }

    if (!this._Subtitle) {
      this._Left.patch({
        Subtitle: { type: TextBox }
      });
    }

    this._Left.patch({
      w: this._textWidth,
      Subtitle: {
        ...this.styles.subtitle,
        content: this._subtitle,
        wordWrapWidth: this._textWidth,
        textColor: this.hasFocus()
          ? this.styles.focused.subtitle.textColor
          : this.styles.subtitle.textColor
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
        Content: { type: TextBox }
      });
    }

    this._Left.patch({
      w: this._textWidth,
      Content: {
        ...this.styles.content,
        content: this._content,
        wordWrapWidth: this._textWidth,
        textColor: this.hasFocus()
          ? this.styles.focused.content.textColor
          : this.styles.content.textColor
      }
    });
  }

  _updateDisclaimer() {
    if (!this.disclaimer) {
      this._Left.patch({ Disclaimer: undefined });
      this._Left.smooth = { y: 0 };
      return;
    }

    if (!this._Disclaimer) {
      this._Left.patch({
        Disclaimer: { type: TextBox }
      });
    }

    this._Left.patch({
      w: this._textWidth,
      Disclaimer: {
        ...this.styles.disclaimer,
        content: this._disclaimer,
        wordWrapWidth: this._textWidth,
        textColor: this.hasFocus()
          ? this.styles.focused.disclaimer.textColor
          : this.styles.disclaimer.textColor
      }
    });
  }

  _updateRadio() {
    this._Right.patch({
      h: h => h,
      Radio: {
        type: Radio,
        w: this.hasFocus() ? this.styles.focused.radio.w : this.styles.radio.w,
        h: this.hasFocus() ? this.styles.focused.radio.h : this.styles.radio.h,
        y: this.styles.radio.y,
        flexItem: false // to adjust the Radio Button's location
      }
    });
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    return [this.title, this.subtitle, this.content, this.disclaimer];
  }
}
