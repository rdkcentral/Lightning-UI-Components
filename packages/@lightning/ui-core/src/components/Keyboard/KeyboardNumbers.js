import Keyboard from './Keyboard';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Keyboard.styles.js';

class KeyboardNumbers extends Keyboard {
  static get __componentName() {
    return 'KeyboardNumbers';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
    this.formats = this.numbersFormat;
  }

  get numbersFormat() {
    return {
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      dialpad: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
      dialpadExtended: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['0'],
        [
          {
            title: 'Delete',
            size: 'lg',
            keyId: 'delete',
            announce: 'delete, button'
          }
        ]
      ]
    };
  }
}

export default withExtensions(KeyboardNumbers);
