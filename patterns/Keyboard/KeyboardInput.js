import Column from '../../layout/Column';
import { Base } from '../../elements';
import Input from '../Input';
import Keyboard, { KEYBOARD_FORMATS } from '.';

export default class KeyboardInput extends Base {
  static get tags() {
    return [
      'Wrapper',
      { name: 'Input', path: 'Wrapper.Input' },
      { name: 'Keyboard', path: 'Wrapper.Keyboard' }
    ];
  }

  static get properties() {
    return [
      'inputPlaceholder',
      'centerAlign',
      'defaultFormat',
      'keyboardFormats'
    ];
  }

  _init() {
    this.patch({
      Wrapper: {
        type: Column,
        itemSpacing: 88,
        items: [
          {
            w: 816,
            type: Input,
            placeholder: this.inputPlaceholder || 'Placeholder',
            ref: 'Input',
            x: this.centerAlign ? this.w / 2 : 0,
            mountX: this.centerAlign ? 0.5 : 0
          },
          {
            type: Keyboard,
            title: this.inputPlaceholder || 'Placeholder',
            defaultFormat: this.defaultFormat || 'lowercase',
            formats: this.keyboardFormats || KEYBOARD_FORMATS.qwerty,
            ref: 'Keyboard',
            centerAlign: this.centerAlign,
            w: this.w
          }
        ],
        selectedIndex: 1
      }
    });
  }

  $onSoftKey({ key }) {
    switch (key) {
      case 'Delete':
        this._Input.backspace();
        break;
      case 'Done':
        // done handler
        break;
      case 'Space':
        this._Input.insert(' ');
        break;
      case 'Clear':
        this._Input.clear();
        break;
      case 'shift':
      case '&123':
      case 'abc':
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
