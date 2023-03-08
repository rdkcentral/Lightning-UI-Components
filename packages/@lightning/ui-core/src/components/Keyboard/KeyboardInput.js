import Keyboard from './index.js';
import Input from '../Input/index.js';
import Base from '../Base/index.js';
import Column from '../Column/index.js';
import * as styles from './Keyboard.styles.js';

export default class KeyboardInput extends Base {
  static get __componentName() {
    return 'KeyboardInput';
  }

  static get properties() {
    return [
      'centerKeyboard',
      'defaultFormat',
      'input', // this should hold all the props passed from Input
      'keyboardType'
    ];
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Wrapper: {
        type: Column,
        neverScroll: true,
        w: this.w,
        items: [
          {
            type: Input,
            ref: 'Input'
          },
          {
            type: Keyboard,
            ref: 'Keyboard',
            passSignals: {
              keyboardWidthChanged: true
            }
          }
        ],
        selectedIndex: 1,
        signals: {
          keyboardWidthChanged: '_updateWidth'
        }
      }
    };
  }

  static get tags() {
    return [
      'Wrapper',
      { name: 'Input', path: 'Wrapper.Input' },
      { name: 'Keyboard', path: 'Wrapper.Keyboard' }
    ];
  }

  _update() {
    this._Wrapper.style.itemSpacing = this.style.inputSpacing;
    this._updateKeyboardType();
    this._updateInput();
    this._updateKeyboard();
    this._updateCenterKeyboard();
  }

  _updateKeyboardType() {
    if (this._Keyboard.constructor !== this.keyboardType) {
      this._Wrapper._resetItems();
      this._Wrapper.items = [
        {
          type: Input,
          ref: 'Input'
        },
        {
          type: this.keyboardType,
          ref: 'Keyboard',
          passSignals: {
            keyboardWidthChanged: true
          }
        }
      ];
    }
  }

  _updateInput() {
    this._Input.patch({
      ...this.input,
      centerInParent: this.centerKeyboard,
      w: this._Keyboard.w,
      style: { ...this.style.inputStyle }, // allows overriding of input styles
      listening: this._isFocusedMode
    });
  }

  _updateKeyboard() {
    this._Keyboard.patch({
      defaultFormat: this.defaultFormat || 'lowercase',
      centerKeyboard: this.centerKeyboard
    });
  }

  // updates width of Wrapper and Input to match keyboard width
  _updateWidth() {
    this._Input.w = this.w = this._Keyboard.w;
    this.fireAncestors('$itemChanged');
  }

  _updateCenterKeyboard() {
    if (this.centerKeyboard) {
      this.x = (this.style.screenW - this.w) / 2 - this.style.marginX;
    } else {
      this.x = 0;
    }
  }

  $onSoftKey({ key = '', toggle }) {
    if (toggle) {
      return;
    }

    switch (key.toLowerCase()) {
      case 'delete':
        this._Input.backspace();
        break;
      case 'done':
        break;
      case 'space':
        this._Input.insert(' ');
        break;
      case 'clear':
        this._Input.clear();
        break;
      default:
        this._Input.insert(key);
    }
  }

  $keyboardFocused(focus) {
    if (focus) {
      this._Input.listening = true;
    } else {
      this._Input.listening = false;
    }
  }

  _getFocused() {
    return this._Wrapper || this;
  }
}