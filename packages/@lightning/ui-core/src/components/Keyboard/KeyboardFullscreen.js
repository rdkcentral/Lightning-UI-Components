import Keyboard from './Keyboard';
import { withExtensions } from '../../mixins/index.js';
import * as styles from './Keyboard.styles.js';

class KeyboardFullScreen extends Keyboard {
  static get __componentName() {
    return 'KeyboardFullScreen';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
    this.formats = this.fullscreenFormat;
  }

  get fullscreenFormat() {
    return {
      letters: [
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          {
            title: '#@!',
            size: 'lg',
            toggle: 'symbols',
            announce: 'symbol mode, button',
            keyId: 'symbols'
          },
          {
            title: 'Space',
            size: 'lg',
            keyId: 'space',
            announce: 'space, button'
          },
          {
            title: 'Delete',
            size: 'md',
            keyId: 'delete',
            announce: 'delete, button'
          },
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z'
        ]
      ],
      symbols: [
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          {
            title: 'ABC',
            size: 'lg',
            toggle: 'letters',
            announce: 'caps on, button'
          },
          {
            title: 'Space',
            size: 'lg',
            keyId: 'space',
            announce: 'space, button'
          },
          {
            title: 'Delete',
            size: 'md',
            keyId: 'delete',
            announce: 'delete, button'
          },
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '0',
          { title: '!', announce: 'exclamation, button' },
          '@',
          '#',
          '$',
          '%',
          { title: '^', announce: 'caret circumflex, button' },
          '&',
          '*',
          { title: '(', announce: 'open parenthesis, button' },
          { title: ')', announce: 'close parenthesis, button' },
          { title: '`', announce: 'grave accent, button' },
          '~',
          '_',
          '.',
          '-',
          '+'
        ]
      ]
    };
  }
}

export default withExtensions(KeyboardFullScreen);
