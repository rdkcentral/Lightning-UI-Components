import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import { Base, Icon } from '../../elements';
import InlineContent from '../../layout/InlineContent';
import styles from './index.styles';

export default class Input extends withStyles(Base, styles) {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      background: this.styles.background,
      placeholder: '',
      position: 0,
      radius: this.styles.radius,
      value: '',
      Label: {
        text: {
          ...this.styles.label,
          text: 'LABEL'
        }
      },
      Container: {
        y: this.styles.label.lineHeight + 16,
        color: this.styles.background,
        zIndex: 2,
        texture: lng.Tools.getRoundRect(
          this.styles.w,
          this.styles.h,
          this.styles.radius
        ),
        ContentWrapper: {
          clipping: true,
          x: this.styles.padding.left,
          y: 8,
          w: w => w,
          h: this.styles.text.lineHeight + 12,
          // TODO: need design input on cursor
          Cursor: {
            w: this.styles.cursor.width,
            h: this.styles.text.lineHeight,
            y: 8,
            color: this.styles.cursor.color,
            rect: true,
            alpha: 0.0001,
            zIndex: 1
          },
          Content: {
            text: {
              ...this.styles.text,
              text: '',
              zIndex: 1
            }
          },
          /**
           * Hidden value is used for measuring where the cursor should
           * be positioned when a user changes the cursor position. Since
           * the text is one texture we don't know the exact position of each
           * individual character, so we render a substring version of the text
           * to determine the renderwidth and position the cursor based on that number
           */
          HiddenContent: {
            alpha: 0.00001,
            text: {
              ...this.styles.text,
              text: '',
              textColor: 0xffffffff
            }
          }
        }
      },
      Icon: {
        type: Icon,
        y: this.styles.label.lineHeight + 32,
        zIndex: 2
      },
      Underline: {
        color: this.styles.underline.color,
        y: this.styles.label.lineHeight + 16 + this.styles.text.lineHeight + 24
      },
      Caption: {
        type: InlineContent,
        textProperties: this.styles.caption,
        x: this.styles.padding.left,
        y:
          this.styles.label.lineHeight +
          16 +
          this.styles.text.lineHeight +
          24 +
          this.styles.underline.weight +
          16,
        iconH: this.styles.captionIcon.height,
        iconW: this.styles.captionIcon.width
      },
      DropShadow: {
        alpha: 0,
        ...this.styles.shadow({
          w: this.styles.w,
          h: this.styles.h
        })
      }
    };
  }

  static get tags() {
    return [
      'Label',
      'Container',
      { name: 'ContentWrapper', path: 'Container.ContentWrapper' },
      { name: 'Cursor', path: 'Container.Cursor' },
      { name: 'Content', path: 'Container.Content' },
      { name: 'HiddenContent', path: 'Container.HiddenContent' },
      'Icon',
      'Underline',
      'Caption',
      'DropShadow'
    ];
  }

  static get properties() {
    return [
      'icon',
      'iconColor',
      'iconFocusColor',
      'label',
      'caption',
      'radius',
      'position',
      'value',
      'mask',
      'password',
      'listening'
    ];
  }

  _construct() {
    super._construct();
    this._value = '';
    this._position = 0;
    this.w = this.styles.w;
    this.h = this.styles.h;
    this._radius = this.styles.radius;
    this._mask = '•';
    this._password = false;
    this._listening = false;
    this._iconHeight = this.styles.iconProperties.height;
    this._iconWidth = this.styles.iconProperties.width;
    this._iconColor = this.styles.iconProperties.color;
    this._iconFocusColor = this.styles.iconProperties.focusColor;
  }

  _init() {
    if (this.styles.cursor && this.styles.cursor.blink) {
      this._cursorBlink = this._Cursor.animation({
        duration: 1.5,
        repeat: -1,
        actions: [{ p: 'alpha', v: { 0: 0, 0.5: 1, 1: 0 } }]
      });
    }
    super._init();
  }

  clear() {
    if (this.listening) {
      this.value = '';
      this.position = 0;
    }
  }

  insert(value) {
    if (this.listening) {
      this.value =
        this.value.slice(0, this.position) +
        value +
        this.value.slice(this.position);
      this.position += value.length;
    }
  }

  backspace() {
    if (this.listening && this.position > 0) {
      this.value =
        this.value.slice(0, this.position - 1) +
        this.value.slice(this.position);
      this.position--;
    }
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateIcon();
      this._updateContainer();
      this._updateTextPosition();
      this._updateUnderline();
      this._updateState();
      this._updateDropShadow();
    });
  }

  _updateIcon() {
    const alpha = this.icon ? 0.64 : 0;
    this._Icon.patch({
      x: this.w - (this._iconWidth + this.styles.padding.left),
      h: this._iconHeight,
      w: this._iconWidth,
      icon: this.icon,
      color: this.hasFocus() ? this.iconFocusColor : this.iconColor
    });
    if (this._smooth) {
      this._Icon.smooth = { alpha };
    } else {
      this._Icon.alpha = alpha;
    }

    this._ContentWrapper.w =
      (this.icon ? this._Icon.x : this.w) - this.styles.padding.left * 2;
  }

  _updateUnderline() {
    if (this._Underline) {
      this._Underline.patch({
        texture: lng.Tools.getRoundRect(
          this.w,
          this.styles.underline.weight,
          this.styles.underline.weight / 2
        )
      });
      this._Underline.w = this.w;
    }
  }

  _updateContainer() {
    if (this._Container) {
      const text =
        (this.password ? this.mask.repeat(this.value.length) : this.value) ||
        this.placeholder;
      this._Container.patch({
        texture: lng.Tools.getRoundRect(this.w, this.h, this.radius),
        ContentWrapper: {
          Content: {
            text: { text }
          }
        }
      });
    }
  }

  _updateTextPosition() {
    const { value, position, password, mask } = this;
    const textBeforeCursor = password
      ? mask.repeat(value.length).substring(0, position)
      : value.substring(0, position);

    // update hidden value and calc width
    this._HiddenContent.text.text = textBeforeCursor;
    this._HiddenContent.loadTexture();

    // TODO: consider adding a property to control if text is center aligned instead of through styles
    const centerAlign = 'center' === this.styles.text.textAlign;
    let contentPatch = {
      mountX: centerAlign ? 0.5 : 0,
      x: centerAlign ? this._w / 2 : 0
    };
    let cursorX = this._HiddenContent.renderWidth;

    // width of input value exceeds width of input, requires "scrolling" on further input
    const isOverflow = this._HiddenContent.renderWidth > this._ContentWrapper.w;

    if (isOverflow) {
      contentPatch = {
        mountX: 0,
        x:
          this._ContentWrapper.w -
          this._HiddenContent.renderWidth -
          this._Cursor.w
      };
      cursorX = this._ContentWrapper.w - this._Cursor.w;
    }
    this._Content.patch(contentPatch);
    this._HiddenContent.patch(contentPatch);
    this._Cursor.patch({
      x: cursorX,
      // TODO: cursor is not currently supported when center aligned. add support at later date
      visible: !centerAlign
    });
  }

  _updateState() {
    if (this.hasFocus()) {
      if (this._cursorBlink && !this._cursorBlink.isPlaying())
        this._cursorBlink.start();
      this._Label.smooth = { alpha: 1 };
      this._Container.smooth = {
        alpha: 1,
        color: this.styles.focused.background.color
      };
      this._Content.smooth = { color: this.styles.focused.text.color };
      this._Underline.smooth = { alpha: 0 };
      this._Cursor.smooth = {
        alpha: 1,
        color: this.styles.focused.cursor.color
      };
    } else {
      this._Label.smooth = { alpha: 0.64 };
      this._Container.smooth = {
        alpha: this.listening ? 1 : 0.64,
        color: this.styles.background
      };
      this._Content.smooth = { color: this.styles.text.textColor };
      this._Underline.smooth = { alpha: this.listening ? 1 : 0.64 };
      this._Cursor.smooth = {
        alpha: this.listening ? 1 : 0,
        color: this.styles.cursor.color
      };
      if (this._cursorBlink)
        this.listening ? this._cursorBlink.start() : this._cursorBlink.stop();
    }
  }

  _updateDropShadow() {
    if (this.w !== this.styles.w) {
      const DropShadow = this.styles.shadow({ w: this.w, h: this.h });
      this._DropShadow.patch(DropShadow);
      this._DropShadow.y = 92;
    }
    const alpha = Number(this.hasFocus());
    if (this._smooth) {
      this._DropShadow.smooth = { alpha };
    } else {
      this._DropShadow.alpha = alpha;
    }
  }

  _handleLeft() {
    const { position } = this;
    if (position > 0) {
      this.position--;
      return true;
    }
    return false;
  }

  _handleRight() {
    const { position, value } = this;
    if (position < value.length) {
      this.position++;
      return true;
    }
    return false;
  }

  _setLabel(label) {
    const upcaseLabel = label.toUpperCase();
    this._Label.text = upcaseLabel;
    return upcaseLabel;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this.password ? 'Input hidden' : this.value || this.placeholder;
  }
  set announce(announce) {
    super.announce = announce;
  }

  _setCaption(caption) {
    this._Caption.content = caption;
  }

  _setPosition(position) {
    if (position >= 0 && position <= this.value.length) {
      return position;
    }
  }

  _setMask(mask) {
    return mask.substring(0, 1);
  }
}
