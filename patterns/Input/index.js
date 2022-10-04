import { withExtensions } from '../../mixins';
import * as styles from './Input.styles';
import Button from '../../elements/Button';
import TextBox from '../../elements/TextBox';

class Input extends Button {
  static get __componentName() {
    return 'Input';
  }
  static get __themeStyle() {
    return styles;
  }
  static _template() {
    return {
      ...super._template(),
      justify: 'left',
      fixed: true,
      Eyebrow: {
        type: TextBox
      },
      HelpText: {
        type: TextBox
      }
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'cursor',
      'eyebrow',
      'helpText',
      'listening',
      'position'
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      'Eyebrow',
      'HelpText',
      { name: 'Cursor', path: 'Content.Cursor' },
      { name: 'HiddenContent', path: 'Content.HiddenContent' }
    ];
  }

  _construct() {
    super._construct();
    this.title = '';
    this.position = this.title ? this.title.length : 0;
    this._w = this.style.minWidth;
  }

  $itemChanged() {
    this._updateCursorPosition();
  }

  _onHiddenContentChanged() {
    this._updateCursorPosition();
  }

  clear() {
    if (this.isCursorActive) {
      this.title = '';
      this.position = 0;
    }
  }

  insert(content) {
    if (this.isCursorActive) {
      this.title =
        this.title.slice(0, this.position) +
        content +
        this.title.slice(this.position);
      this.position += content.length;
    }
  }

  backspace() {
    if (this.isCursorActive && this.position > 0) {
      this.title =
        this.title.slice(0, this.position - 1) +
        this.title.slice(this.position);
      this.position--;
    }
  }

  _handleLeft() {
    const { position } = this;
    if (position >= 0) {
      this.position--;
      return true;
    }
    return false;
  }

  _handleRight() {
    const { position, title } = this;
    if (position < title.length) {
      this.position++;
      return true;
    }
    return false;
  }

  _update() {
    super._update();
    this._updateCursor();
    this._updateEyebrow();
    this._updateState();
    this._updateHiddenContent();
    this._updateCursorBlink();
    this._updateHelpText();
    this._updateSuffixPosition();
    this._updateCursorPosition();
  }

  _onTextBoxChanged() {
    this._updateHiddenContent();
  }

  _updateCursor() {
    if (this.style.cursorStyles && this.style.cursorStyles.blink) {
      this._Content.patch({
        Cursor: {}
      });
      /**
       * Hidden value is used for measuring where the cursor should
       * be positioned when a user changes the cursor position. Since
       * the text is one texture we don't know the exact position of each
       * individual character, so we render a substring version of the text
       * to determine the renderwidth and position the cursor based on that number
       */
      this._Content.patch({
        HiddenContent: {
          type: TextBox,
          signals: {
            textBoxChanged: '_onHiddenContentChanged'
          }
        }
      });
      if (this.isCursorActive) {
        this._Cursor.patch({
          mountY: 0.5,
          w: this.style.cursorStyles.w,
          h: this.style.cursorStyles.h,
          color: this.style.cursorStyles.color,
          rect: true
        });
        this.cursorBlink = this._Cursor.animation({
          duration: 1.5,
          repeat: -1,
          actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
        });
      }
    }
  }

  _updateEyebrow() {
    this._Eyebrow.patch({
      content: this.eyebrow,
      textStyle: this.style.supportTextStyle,
      textColor: this.style.eyebrowColor,
      mountY: 0,
      x: this.style.paddingX,
      y: this.y - this.h / 2 - this.style.paddingY
    });
  }

  _updateCursorBlink() {
    if (this.cursorBlink) {
      if (this.isCursorActive) {
        this.cursorBlink.start();
      } else {
        this.cursorBlink.stop();
        this._Cursor.patch({
          alpha: 0.001
        });
      }
    }
  }

  _updateState() {
    if (this.mode === 'focused') {
      if (this.cursorBlink && !this.cursorBlink.isPlaying()) {
        this.cursorBlink.start();
      }
      this._Cursor.smooth = {
        alpha: 0,
        color: this.style.cursorStyles.color
      };
    } else {
      this._Cursor.smooth = {
        alpha: this.listening ? 1 : 0,
        color: this.style.cursorStyles.color
      };
      if (this.cursorBlink)
        this.isCursorActive
          ? this.cursorBlink.start()
          : this.cursorBlink.stop();
    }
  }

  _updateTruncation() {
    // do not add word wrap
  }

  _updateCursorPosition() {
    let textPatch = {};
    if (this._isOverflow) {
      this._TitleWrapper.patch({
        w: this._visibleContentWidth,
        h: this._Title.h,
        clipping: true
      });
      textPatch = {
        mountX: 0,
        x: this._visibleContentWidth - this._HiddenContent.renderWidth
      };
      this._Cursor.patch({
        x: this._titleX + this._TitleWrapper.w
      });
      this._Title.patch({
        ...textPatch
      });
    } else {
      this._Cursor.patch({
        x: this._titleX + this._HiddenContent.w
      });
      this._TitleWrapper.x = this._titleX;
    }
    this._HiddenContent.patch(textPatch);
  }

  _updateHiddenContent() {
    const { title: value = '', position } = this;
    const textBeforeCursor = value.substring(0, position);
    this._HiddenContent.patch({
      textStyle: this.style.textStyle,
      content: textBeforeCursor,
      x: this._titleX
    });
    // TODO: TextBox is not sending a w of 0 when content is an empty string. manually set to 0 when no content
    if (!textBeforeCursor.length) {
      this._HiddenContent.w = 0;
    }
    if (this._HiddenContent._Text) {
      this._HiddenContent._Text.patch({
        alpha: 0.001
      });
    }
  }

  _updateSuffixPosition() {
    if (this._hasSuffix) {
      this._Suffix.patch({
        mountX: 1,
        x: this.w - 2 * this.style.paddingX
      });
    }
  }

  _updateHelpText() {
    this._HelpText.patch({
      content: this.helpText,
      textStyle: this.style.supportTextStyle,
      textColor: this.style.helpTextColor,
      x: this.style.paddingX,
      y: this.y + this.h + 2 * this.style.paddingY
    });
  }

  get isCursorActive() {
    return this.listening && this.mode === 'focused';
  }

  get _isOverflow() {
    const isOverflow = this._HiddenContent.w > this._visibleContentWidth;
    return isOverflow;
  }

  get _visibleContentWidth() {
    const suffixW = this._hasSuffix
      ? this._suffixW + this.style.titlePadding
      : 0;
    const visibleContentWidth =
      this.w -
      this._titleX -
      suffixW -
      this.style.suffixPadding -
      this.style.paddingX -
      this.style.titleWrapperX;
    return visibleContentWidth;
  }

  get w() {
    return this._w;
  }

  set w(v) {
    if (typeof v !== 'undefined') {
      this._w = v;
    }
  }
}

export default withExtensions(Input);
