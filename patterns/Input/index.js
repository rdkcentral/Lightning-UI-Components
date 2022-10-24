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
      Eyebrow: { type: TextBox },
      HelpText: { type: TextBox }
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'actualTitle',
      'cursor',
      'eyebrow',
      'helpText',
      'listening',
      'mask',
      'password',
      'position'
      // TODO: should maybe remove "fixed" as an editable prop to make sure this is never dynamic
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
    this._title = '';
    this.actualTitle = '';
    this.position = this.title ? this.title.length : 0;
    this._justify = 'left';
    this._fixed = true;
    this.w = this.style.minWidth;
  }

  $itemChanged() {
    this._updateCursorPosition();
  }

  _onTitleTextBoxChanged() {
    super._onTitleTextBoxChanged();
    this._updateHiddenContent();
  }

  _onHiddenTextBoxChanged() {
    this._updateCursorPosition();
    this._updateTitleScrollPosition();
  }

  _update() {
    this._updatePassword(); // need to update title masking before rendering the new title
    super._update();

    this._updateEyebrow();
    this._updateHelpText();

    this._updateTextWrapper();
    this._updateHiddenContent();

    this._updateCursor();
    this._updateCursorListening();
    this._updateCursorBlink();
    this._updateCursorPosition();

    this._updateTitleScrollPosition();
  }

  _updatePassword() {
    this.title = this.password
      ? this.mask.repeat(this.actualTitle.length)
      : this.actualTitle;
  }

  _updateTruncation() {
    // do not add word wrap
    if (this._Title) {
      this._Title.patch({ wordWrap: false });
    }
  }

  _updateEyebrow() {
    this._Eyebrow.patch({
      content: this.eyebrow,
      textStyle: this.style.eyebrowTextStyle,
      mountY: 1,
      x: this.style.paddingX,
      y: this.y - this.style.paddingY
    });
  }

  _updateHelpText() {
    this._HelpText.patch({
      content: this.helpText,
      textStyle: this.style.helpTextStyle,
      x: this.style.paddingX,
      y: this.y + this.innerH + this.style.paddingY
    });
  }

  _updateTextWrapper() {
    this._TextWrapper.clipping = true;
    this._TextWrapper.w = this._visibleContentWidth;
    if (this._Title) {
      this._TextWrapper.h = this._Title.h;
    }
  }

  _updateHiddenContent() {
    /**
     * Hidden value is used for measuring where the cursor should
     * be positioned when a user changes the cursor position. Since
     * the text is one texture we don't know the exact position of each
     * individual character, so we render a substring version of the text
     * to determine the renderwidth and position the cursor based on that number
     */
    if (!this._HiddenContent) {
      this._Content.patch({
        HiddenContent: {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onHiddenTextBoxChanged'
          }
        }
      });
    }

    const { title: value = '', position, password, mask } = this;

    const textBeforeCursor = password
      ? mask.repeat(value.length).substring(0, position)
      : value.substring(0, position);

    this._HiddenContent.patch({
      textStyle: this.style.textStyle,
      content: textBeforeCursor
    });

    this._HiddenContent._Text &&
      this._HiddenContent._Text.patch({ alpha: 0.001 });
  }

  _updateCursor() {
    if (this.style.cursorStyles && this.style.cursorStyles.blink) {
      if (!this._Cursor) {
        this._Content.patch({
          Cursor: {
            rect: true,
            mountY: 0.5
          }
        });
        this.cursorBlink = this._Cursor.animation({
          duration: 1.5,
          repeat: -1,
          actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
        });
      }
      this._Cursor.patch(this.style.cursorStyles);
    }
  }

  _updateCursorListening() {
    if (!this._isDisabledMode) {
      if (this.cursorBlink && !this.cursorBlink.isPlaying()) {
        this.cursorBlink.start();
      }
      this._Cursor.smooth = {
        alpha: 0,
        color: this.style.cursorStyles.textColor
      };
    } else {
      this._Cursor.smooth = {
        alpha: this.listening ? 1 : 0,
        color: this.style.cursorStyles.textColor
      };
      if (this.cursorBlink)
        this.isCursorActive
          ? this.cursorBlink.start()
          : this.cursorBlink.stop();
    }
  }

  _updateCursorBlink() {
    if (this.cursorBlink) {
      if (this.isCursorActive) {
        this.cursorBlink.start();
      } else {
        this.cursorBlink.stop();
        this._Cursor.patch({ alpha: 0.001 });
      }
    }
  }

  _updateCursorPosition() {
    this._Cursor.x =
      this._titleX +
      (this._isOverflow ? this._TextWrapper.w : this._HiddenContent.w);
  }

  _updateTitleScrollPosition() {
    if (this._Title) {
      this._Title.x = this._isOverflow
        ? this._visibleContentWidth - this._HiddenContent.w
        : 0;
      if (this._HiddenContent && this._TextWrapper) {
        this._HiddenContent.x = this._TextWrapper.x + this._Title.x;
      }
    }
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    // need to check with Accessibility on what order this should read out in
    if (this.password) {
      return [this.eyebrow, this.helpText];
    } else {
      return [this.eyebrow, 'Input: ' + this.title, this.helpText];
    }
  }

  get _suffixX() {
    const suffixX =
      this.w - this._paddingRight - this._suffixW - this.style.paddingX;
    return suffixX > 0 ? suffixX : 0;
  }

  get isCursorActive() {
    return this.listening && (this._isFocusedMode || this._isUnfocusedMode);
  }

  get _isOverflow() {
    return this._HiddenContent.w > this._visibleContentWidth;
  }

  get _visibleContentWidth() {
    return this._fixedWordWrapWidth;
  }

  clear() {
    if (this.isCursorActive) {
      this.title = this.actualTitle = '';
      this.position = 0;
    }
  }

  insert(content) {
    if (this.isCursorActive) {
      this.actualTitle =
        this.actualTitle.slice(0, this.position) +
        content +
        this.actualTitle.slice(this.position);
      this._updatePassword();
      this.position += content.length;
    }
  }

  backspace() {
    if (this.isCursorActive && this.position > 0) {
      this.actualTitle =
        this.actualTitle.slice(0, this.position - 1) +
        this.actualTitle.slice(this.position);
      this._updatePassword();
      this.position--;
    }
  }

  _handleLeft() {
    if (this._isDisabledMode) {
      return false;
    }
    this.moveLeft();
    if (typeof this.onLeft === 'function') {
      return this.onLeft(this);
    }
    return true;
  }

  _handleRight() {
    if (this._isDisabledMode) {
      return false;
    }
    this.moveRight();
    if (typeof this.onRight === 'function') {
      return this.onRight(this);
    }
    return true;
  }

  moveLeft() {
    const { position } = this;
    if (position >= 0) {
      this.position--;
      return true;
    }
    return false;
  }

  moveRight() {
    const { position, title } = this;
    if (position < title.length) {
      this.position++;
      return true;
    }
    return false;
  }
}
export default withExtensions(Input);
