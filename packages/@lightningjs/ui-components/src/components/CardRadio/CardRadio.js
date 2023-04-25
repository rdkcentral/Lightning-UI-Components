import CardTitle from '../Card/CardTitle';
import TextBox from '../TextBox';

import * as styles from './CardRadio.styles.js';

// Is this the correct extension?
export default class CardRadio extends CardTitle {
  static get __componentName() {
    return 'CardRadio';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'content', 'disclaimer'];
  }

  static get tags() {
    return [
      ...super.tags,
      { name: 'Content', path: 'Left.Content' },
      { name: 'Disclaimer', path: 'Left.Disclaimer' }
    ];
  }

  _update() {
    super._update();

    this._updateLayout();
    this._updateRadio();
    this._updateContent();
    this._updateDisclaimer();
  }

  _updateLayout() {
    this.w = this.styles.w;
    this.h = this.styles.h;

    this._Left.patch({
      flex: undefined,
      flexItem: { alignSelf: 'stretch' }
    });
  }

  get _textWidth() {
    return (
      this.w -
      this.styles.paddingLeft -
      32 -
      this._Right.renderWidth -
      this.styles.paddingRight
    );
  }

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
          ? this.styles.mode.focused.title.textColor
          : this.styles.title.textColor
      }
    });
  }

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
          ? this.styles.mode.focused.subtitle.textColor
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
          ? this.styles.mode.focused.content.textColor
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
          ? this.styles.mode.focused.disclaimer.textColor
          : this.styles.disclaimer.textColor
      }
    });
  }

  _updateRadio() {
    this._Right.patch({
      h: h => h,
      Radio: {
        type: Radio,
        w: this.hasFocus() ? this.styles.mode.focused.radio.w : this.styles.radio.w,
        h: this.hasFocus() ? this.styles.mode.focused.radio.h : this.styles.radio.h,
        y: this.styles.radio.y,
        flexItem: false
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