const fs = require('file-system');
const path = require('path');

const githubReference = process.env.REF || 'master';

module.exports = {
  require: [
    path.join(__dirname, 'components/theme/styles/font-face.module.css'),
    path.resolve(__dirname, 'utils/scripts/setup.js')
  ],
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file);
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang
      };
    }
    return props;
  },
  exampleMode: 'expand',
  pagePerSection: true,
  sections: [
    {
      name: 'Guides',
      description:
        'A collection of Lightning UI Components',
      sections: [
        {
          name: 'Resolving',
          content: 'docs/usage.md'
        },
        {
          name: 'Roadmap',
          content: 'docs/components.md'
        },
        {
          name: 'Contact',
          content: 'docs/support.md'
        }
      ],
      sectionDepth: 0
    },
    {
      name: 'Layout',
      description: 'Wrapper components',
      sectionDepth: 3,
      components: ['components/badge/src/badge.js', 'components/box/src/box.js']
    },
    {
      name: 'Inputs',
      sectionDepth: 3,
      components: [
        'components/autosuggest/src/autosuggest.js',
        'components/input*/src/input*.js',
        'components/button/src/button.js',
        'components/signature-pad/src/signature-pad.js'
      ]
    },
    {
      name: 'Feedback',
      sectionDepth: 3,
      components: ['components/loading/src/loading.js']
    },
    {
      name: 'Data',
      sectionDepth: 3,
      components: [
        'components/table/src/table*.js',
        'components/table/src/components/simpletable/simple-table.js',
        'components/table/src/components/pagination.js'
      ]
    },
    {
      name: 'Navigation',
      sectionDepth: 3,
      components: ['components/link*/src/link*.js']
    },
    {
      name: 'Media',
      sectionDepth: 3,
      components: ['components/icon/src/icon.js']
    },
    {
      name: 'Complex Components',
      components: [
        'components/modal/src/modal.js',
        'components/localization/src/localization.js',
        'components/cart/src/cart.js'
      ],
      sectionDepth: 2
    },
    {
      name: 'Utilities',
      description:
        'Shared [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html), & [Context](https://reactjs.org/docs/context.html)',
      sections: [
        {
          name: 'addClassToChildren',
          content: 'components/utilities/src/addClassToChildren/README.md'
        },
        {
          name: 'HOC',
          description:
            'Learn more about: [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)',
          components: ['components/utilities/src/hoc/*.js']
        },
        {
          name: 'Hooks',
          description:
            'Learn more about: [React Hooks](https://reactjs.org/docs/hooks-intro.html)',
          content: 'components/utilities/src/hooks/hooks.md'
        },
        {
          name: 'Context',
          description:
            'Learn more about: [Context](https://reactjs.org/docs/context.html)',
          content: 'components/utilities/src/context/context.md'
        }
      ],
      sectionDepth: 2
    },
    {
      name: 'Theme',
      description: 'Default Branding & Theme',
      content: 'components/theme/src/README.md',
      sections: [
        {
          name: 'Colors',
          content: 'components/theme/docs/color.md'
        },
        {
          name: 'Typography',
          content: 'components/theme/docs/typography.md'
        }
      ],
      sectionDepth: 2
    }
  ],
  styles: {
    StyleGuide: {
      '@global body': {
        'font-weight': 300
      },
      '@global .token.plain-text': {
        color: '#2a2c2d'
      },
      '@global table[class^="rsg--table-"]': {
        background: '#e6eaed'
      },
      '@global table[class^="rsg--table-"] th': {
        padding: '8px'
      },
      '@global table[class^="rsg--table-"] td': {
        padding: '8px 16px'
      },
      '@global [theme=blue]': {
        background: 'var(--color-blue-ocean) !important'
      },
      '@global [theme=dark]': {
        background: 'var(--color-smolder) !important',
        color: 'var(--color-white)'
      },
      '@global .spread-out > div': {
        display: 'flex',
        'justify-content': 'space-evenly',
        'align-items': 'flex-start'
      }
    },
    Playground: {
      preview: {
        padding: '36px',
        background: 'var(--color-cool-grey2)',
        'text-align': 'center'
      }
    },
    Blockquote: {
      blockquote: {
        '& > p': {
          margin: '0'
        },
        background: 'var(--color-cool-grey3)',
        'border-left': '6px solid var(--color-turq)',
        margin: '12px 0',
        padding: '0.5em 10px'
      },
      p: {
        margin: '0'
      }
    },
    Code: {
      code: {
        color: '#015383'
      }
    },
    Pre: {
      pre: {
        border: '1px solid #dde2e6',
        borderRadius: 0,
        whiteSpace: 'pre-wrap'
      }
    },
    ReactComponent: {
      tabButtons: {
        margin: 0
      }
    },
    Version: {
      version: {
        'background-image': 'var(--gradient-bramble-reign)',
        borderRadius: '3px',
        color: '#fff',
        display: 'inline-block',
        fontSize: '12px',
        padding: '2px 6px',
        textTransform: 'uppercase'
      }
    }
  },
  theme: {
    color: {
      base: 'var(--color-color-grey14)',
      light: '#191919',
      lightest: '#646a70',
      link: '#0272b6',
      linkHover: '#2b9cd8',
      focus: 'rgba(22, 115, 177, 0.25)',
      border: '#e8e8e8',
      name: '#690',
      type: '#905',
      error: '#c00',
      baseBackground: 'var(--color-cool-grey2)',
      codeBackground: '#fafafa',
      sidebarBackground: 'var(--color-cool-grey1)',
      ribbonBackground: 'var(--color-blue-genie)',
      ribbonText: 'var(--color-white)',
      // Prism theme
      codeComment: '#6d6d6d',
      codePunctuation: '#999',
      codeProperty: '#905',
      codeDeleted: '#905',
      codeString: '#690',
      codeInserted: '#690',
      codeOperator: '#9a6e3a',
      codeKeyword: '#1673b1',
      codeFunction: '#DD4A68',
      codeVariable: '#ffa700'
    },
    maxWidth: 1280,
    sidebarWidth: 260,
    fontFamily: {
      base: [
        'Avant Garde',
        'Avantgarde',
        'Century Gothic',
        'CenturyGothic',
        'AppleGothic',
        'Geneva'
      ]
    }
  },
  ribbon: {
    // Link to open on the ribbon click (required)
    url: 'https://github.com/chiefcll/lightning-ui',
    // Text to show on the ribbon (optional)
    text: 'GitHub'
  },
  template: {
    favicon: ''
  },
  styleguideComponents: {
    'slots/CodeTabButton': path.resolve(
      __dirname,
      'utils/styleguide/CodeTabButton'
    )
  },
  moduleAliases: {
  },
  getComponentPathLine(componentPath) {
    const camelize = str => {
      return str.replace(/-+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    };
    const capitalizeFirstLetter = str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const name = path.basename(componentPath, '.js');
    const importName = camelize(capitalizeFirstLetter(name));
    const subComponent = componentPath.includes('/components/');
    const message = !subComponent
      ? `import ${importName} from '@wpe-lightning-ui/${name}';`
      : ``;
    return message;
  },
  title: `Lightning UI Components`,
  usageMode: 'expand',
  version: githubReference.toString()
};
