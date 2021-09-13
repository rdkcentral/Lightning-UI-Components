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
          label: '#@!',
          size: 'large',
          toggle: 'symbols',
          announce: 'symbol mode, button'
        },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' },
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
          label: 'ABC',
          size: 'large',
          toggle: 'letters',
          announce: 'caps on, button'
        },
        { label: 'Space', size: 'large' },
        { label: 'Delete', size: 'large' },
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
        { label: '!', announce: 'exclamation, button' },
        '@',
        '#',
        '$',
        '%',
        { label: '^', announce: 'caret circumflex, button' },
        '&',
        '*',
        { label: '(', announce: 'open parenthesis, button' },
        { label: ')', announce: 'close parenthesis, button' },
        { label: '`', announce: 'grave accent, button' },
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
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
          label: 'áöû',
          size: 'medium',
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
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        {
          label: 'shift',
          size: 'medium',
          toggle: 'lowercase',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
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
          label: 'áöû',
          size: 'medium',
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
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        {
          label: 'shift',
          size: 'medium',
          toggle: 'uppercase',
          announce: 'shift on, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
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
          label: 'abc',
          size: 'medium',
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
          label: 'shift',
          size: 'medium',
          toggle: 'accentsUpper',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
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
          label: '#@!',
          size: 'medium',
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
          label: 'abc',
          size: 'medium',
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
          label: 'shift',
          size: 'medium',
          toggle: 'accents',
          announce: 'shift off, button'
        }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
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
        { label: 'Delete', size: 'medium' }
      ],
      [
        { label: '!', announce: 'exclamation, button' },
        '@',
        '#',
        '$',
        '%',
        { label: '^', announce: 'caret circumflex, button' },
        '&',
        '*',
        { label: '(', announce: 'open parenthesis, button' },
        { label: ')', announce: 'close parenthesis, button' },
        {
          label: 'abc',
          size: 'medium',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }
      ],
      [
        { label: '{', announce: 'open brace, button' },
        { label: '}', announce: 'close brace, button' },
        { label: '[', announce: 'open bracket, button' },
        { label: ']', announce: 'close bracket, button' },
        { label: ';', announce: 'semicolon, button' },
        { label: '"', announce: 'doublequote, button' },
        { label: "'", announce: 'singlequote, button' },
        { label: '|', announce: 'vertical bar, button' },
        { label: '\\', announce: 'backslash, button' },
        { label: '/', announce: 'forwardslash, button' },
        {
          label: 'áöû',
          size: 'medium',
          toggle: 'accents',
          announce: 'accents, button'
        }
      ],
      [
        { label: '<', announce: 'less than, button' },
        { label: '>', announce: 'greater than, button' },
        { label: '?', announce: 'question mark, button' },
        { label: '±', announce: 'plus minus sign, button' },
        { label: '`', announce: 'grave accent, button' },
        { label: '~', announce: 'tilde, button' },
        { label: '_', announce: 'underscore, button' },
        { label: '.', announce: 'period, button' },
        { label: '-', announce: 'dash, button' },
        { label: '+', announce: 'plus sign, button' }
      ],
      [
        { label: 'Clear', size: 'large' },
        { label: 'Space', size: 'xlarge' },
        { label: 'Done', size: 'large' }
      ]
    ]
  },
  numbers: {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    dialpad: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['', '0', '']
    ],
    dialpadExtended: [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
      ['', '0', ''],
      [{ label: 'Delete', size: 'large' }]
    ]
  }
};
