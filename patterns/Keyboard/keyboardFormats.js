import backspace from '../../Styles/assets/ic_backspace_outline_inverse_48_x3';

export default {
  fullscreen: {
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
          announce: 'symbol mode, button'
        },
        { title: 'Space', size: 'lg' },
        { title: 'Delete', size: 'lg' },
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
        { title: 'Space', size: 'lg' },
        { title: 'Delete', size: 'lg' },
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
  },
  qwerty: {
    uppercase: [
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
        { title: 'Delete', size: 'md' }
      ],
      [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        '@',
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        { title: '_', announce: 'underscore, button' },
        { title: '.', announce: 'period, button' },
        { title: '-', announce: 'dash, button' },
        {
          title: 'shift',
          size: 'md',
          toggle: 'lowercase',
          announce: 'shift off, button'
        }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    lowercase: [
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
        { title: 'Delete', size: 'md' }
      ],
      [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        '@',
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        { title: '_', announce: 'underscore, button' },
        { title: '.', announce: 'period, button' },
        { title: '-', announce: 'dash, button' },
        {
          title: 'shift',
          size: 'md',
          toggle: 'uppercase',
          announce: 'shift on, button'
        }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    accents: [
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
        { title: 'Delete', size: 'md' }
      ],
      [
        'ä',
        'ë',
        'ï',
        'ö',
        'ü',
        'ÿ',
        'à',
        'è',
        'ì',
        'ò',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'ù',
        'á',
        'é',
        'í',
        'ó',
        'ú',
        'ý',
        'â',
        'ê',
        'î',
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        '',
        '',
        '',
        'ô',
        'û',
        'ã',
        'ñ',
        '',
        '',
        '',
        {
          title: 'shift',
          size: 'md',
          toggle: 'accentsUpper',
          announce: 'shift off, button'
        }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    accentsUpper: [
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
        { title: 'Delete', size: 'md' }
      ],
      [
        'Ä',
        'Ë',
        'Ï',
        'Ö',
        'Ü',
        'Ÿ',
        'À',
        'È',
        'Ì',
        'Ò',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'Ù',
        'Á',
        'É',
        'Í',
        'Ó',
        'Ú',
        'Ý',
        'Â',
        'Ê',
        'Î',
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        '',
        '',
        '',
        'Ô',
        'Û',
        'Ã',
        'Ñ',
        '',
        '',
        '',
        {
          title: 'shift',
          size: 'md',
          toggle: 'accents',
          announce: 'shift off, button'
        }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    symbols: [
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
        { title: 'Delete', size: 'md' }
      ],
      [
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
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        { title: '{', announce: 'open brace, button' },
        { title: '}', announce: 'close brace, button' },
        { title: '[', announce: 'open bracket, button' },
        { title: ']', announce: 'close bracket, button' },
        { title: ';', announce: 'semicolon, button' },
        { title: '"', announce: 'doublequote, button' },
        { title: ',', announce: 'comma, button' },
        { title: '|', announce: 'vertical bar, button' },
        { title: '\\', announce: 'backslash, button' },
        { title: '/', announce: 'forwardslash, button' },
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        { title: '<', announce: 'less than, button' },
        { title: '>', announce: 'greater than, button' },
        { title: '?', announce: 'question mark, button' },
        { title: '=', announce: 'equal sign, button' },
        { title: '`', announce: 'grave accent, button' },
        { title: '~', announce: 'tilde, button' },
        { title: '_', announce: 'underscore, button' },
        { title: ':', announce: 'colon, button' },
        { title: '-', announce: 'dash, button' },
        { title: '+', announce: 'plus sign, button' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ]
  },
  numbers: {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    dialpad: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
    dialpadExtended: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['0'],
      [{ title: 'Delete', size: 'lg' }]
    ]
  },
  email: {
    uppercase: [
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
        { title: 'Delete', icon: { src: backspace, size: 48 }, size: 'md' }
      ],
      [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        '@',
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        { title: '.', announce: 'period, button' },
        { title: '-', announce: 'dash, button' },
        { title: '_', announce: 'underscore, button' },
        {
          title: 'shift',
          size: 'md',
          toggle: 'lowercase',
          announce: 'shift off, button'
        }
      ],
      [
        { title: '.com', announce: 'dot, com', size: 'md' },
        { title: '.net', announce: 'dot, net', size: 'md' },
        { title: '.edu', announce: 'dot, edu', size: 'md' },
        { title: '.org', announce: 'dot, org', size: 'md' },
        { title: '.co', announce: 'dot, co', size: 'md' },
        { title: '.uk', announce: 'dot, uk', size: 'md' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    lowercase: [
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
        { title: 'Delete', icon: { src: backspace, size: 48 }, size: 'md' }
      ],
      [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        '@',
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        { title: '_', announce: 'underscore, button' },
        { title: '.', announce: 'period, button' },
        { title: '-', announce: 'dash, button' },
        {
          title: 'shift',
          size: 'md',
          toggle: 'uppercase',
          announce: 'shift on, button'
        }
      ],
      [
        { title: '.com', announce: 'dot, com', size: 'md' },
        { title: '.net', announce: 'dot, net', size: 'md' },
        { title: '.edu', announce: 'dot, edu', size: 'md' },
        { title: '.org', announce: 'dot, org', size: 'md' },
        { title: '.co', announce: 'dot, co', size: 'md' },
        { title: '.uk', announce: 'dot, uk', size: 'md' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    accents: [
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
        { title: 'Delete', icon: { src: backspace, size: 48 }, size: 'md' }
      ],
      [
        'ä',
        'ë',
        'ï',
        'ö',
        'ü',
        'ÿ',
        'à',
        'è',
        'ì',
        'ò',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'ù',
        'á',
        'é',
        'í',
        'ó',
        'ú',
        'ý',
        'â',
        'ê',
        'î',
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        '',
        '',
        '',
        'ô',
        'û',
        'ã',
        'ñ',
        '',
        '',
        '',
        {
          title: 'shift',
          size: 'md',
          toggle: 'accentsUpper',
          announce: 'shift off, button'
        }
      ],
      [
        { title: '.com', announce: 'dot, com', size: 'md' },
        { title: '.net', announce: 'dot, net', size: 'md' },
        { title: '.edu', announce: 'dot, edu', size: 'md' },
        { title: '.org', announce: 'dot, org', size: 'md' },
        { title: '.co', announce: 'dot, co', size: 'md' },
        { title: '.uk', announce: 'dot, uk', size: 'md' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    accentsUpper: [
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
        { title: 'Delete', icon: { src: backspace, size: 48 }, size: 'md' }
      ],
      [
        'Ä',
        'Ë',
        'Ï',
        'Ö',
        'Ü',
        'Ÿ',
        'À',
        'È',
        'Ì',
        'Ò',
        {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        }
      ],
      [
        'Ù',
        'Á',
        'É',
        'Í',
        'Ó',
        'Ú',
        'Ý',
        'Â',
        'Ê',
        'Î',
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        '',
        '',
        '',
        'Ô',
        'Û',
        'Ã',
        'Ñ',
        '',
        '',
        '',
        {
          title: 'shift',
          size: 'md',
          toggle: 'accents',
          announce: 'shift off, button'
        }
      ],
      [
        { title: '.com', announce: 'dot, com', size: 'md' },
        { title: '.net', announce: 'dot, net', size: 'md' },
        { title: '.edu', announce: 'dot, edu', size: 'md' },
        { title: '.org', announce: 'dot, org', size: 'md' },
        { title: '.co', announce: 'dot, co', size: 'md' },
        { title: '.uk', announce: 'dot, uk', size: 'md' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ],
    symbols: [
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
        { title: 'Delete', icon: { src: backspace, size: 48 }, size: 'md' }
      ],
      [
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
        {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        { title: '{', announce: 'open brace, button' },
        { title: '}', announce: 'close brace, button' },
        { title: '[', announce: 'open bracket, button' },
        { title: ']', announce: 'close bracket, button' },
        { title: ';', announce: 'semicolon, button' },
        { title: '"', announce: 'doublequote, button' },
        { title: ',', announce: 'comma, button' },
        { title: '|', announce: 'vertical bar, button' },
        { title: '\\', announce: 'backslash, button' },
        { title: '/', announce: 'forwardslash, button' },
        {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        { title: '<', announce: 'less than, button' },
        { title: '>', announce: 'greater than, button' },
        { title: '?', announce: 'question mark, button' },
        { title: '=', announce: 'equal sign, button' },
        { title: '`', announce: 'grave accent, button' },
        { title: '~', announce: 'tilde, button' },
        { title: '_', announce: 'underscore, button' },
        { title: ':', announce: 'colon, button' },
        { title: '-', announce: 'dash, button' },
        { title: '+', announce: 'plus sign, button' }
      ],
      [
        { title: '.com', announce: 'dot, com', size: 'md' },
        { title: '.net', announce: 'dot, net', size: 'md' },
        { title: '.edu', announce: 'dot, edu', size: 'md' },
        { title: '.org', announce: 'dot, org', size: 'md' },
        { title: '.co', announce: 'dot, co', size: 'md' },
        { title: '.uk', announce: 'dot, uk', size: 'md' }
      ],
      [
        { title: 'Clear', size: 'lg' },
        { title: 'Space', size: 'xl' },
        { title: 'Done', size: 'lg' }
      ]
    ]
  }
};
