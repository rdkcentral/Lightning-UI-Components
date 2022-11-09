import { CardVerticalLarge, CardHorizontal } from '../../legacy/Card';
import BoardRow from '.';
import lng from '@lightningjs/core';
import mdx from './BoardRow.mdx';

import { Tile, Column } from '@lightning/ui-core';

export default {
  title: 'Patterns / BoardRow',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const getItems = type => {
  return [
    {
      src: '7245349740136736112',
      onEnter: () => {
        alert('Tenet card onEnter');
      }
    },
    {
      src: '7615274088441709112'
    },
    {
      src: '4787646614985090112'
    },
    {
      src: '6366577040434117112'
    },
    {
      src: '5879798181352259112'
    },
    {
      src: '6702815185485076112'
    },
    {
      src: '7762245375893944112'
    },
    {
      src: '5369987084856006112'
    },
    {
      src: '7108813814104030112'
    },
    {
      src: '6030648778584858112'
    }
  ].map(item => {
    return {
      ...item,
      type
    };
  });
};

// Example of asynchronous callback
function srcCallback({ type, src, w, h }) {
  return new Promise(resolve => {
    let imgSrc, focusSrc;
    if (CardVerticalLarge.isPrototypeOf(type)) {
      imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=3x2`;
    } else {
      imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&height=${h}&rule=title`;
      focusSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&height=${h}&rule=noTitle`;
    }

    var img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      resolve({ src: imgSrc, focusSrc });
    };
    img.onerror = () => {
      // Fallback to default aspect ratio if not found
      resolve({
        src:
          type.prototype instanceof CardVerticalLarge
            ? `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=16x9&rule=noTitle`
            : `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=16x9`
      });
    };

    var imgFocusPreload = new Image();
    imgFocusPreload.src = focusSrc;
    imgFocusPreload.onload = () => {
      // console.log(`${focusSrc} preloaded`);
    };
  });
}

// Example of synchronous callback
// function srcCallback({ type, src, w, h }) {
//   let imgSrc;
//     if (type.prototype instanceof CardVerticalLarge) {
//       imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=3x2`;
//     } else {
//       imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&height=${h}`;
//     }
//     return imgSrc;
// }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      const boardRow = {
        type: BoardRow,
        w: 1920 - 160, // x offset from preview.js * 2
        // Menu Card Props
        itemSpacing: 40,
        menuCard: {
          title: `${
            args.layout ? capitalizeFirstLetter(args.layout) : 'Standard'
          } Layout`,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis quam eget mi fermentum, a malesuada lectus convallis. Suspendisse potenti.',
          cta: 'View All',
          gradientColor: args.gradientColor,
          backgroundColorFocus: args.backgroundColorFocus,
          onEnter: () => {
            // eslint-disable-next-line no-restricted-syntax
            console.log('view all action');
          },
          onInfo: () => {
            // eslint-disable-next-line no-restricted-syntax
            console.log('view all on info action');
          }
        },
        // Row settings
        alwaysScroll: args.alwaysScroll,
        neverScroll: args.neverScroll,
        lazyScroll: args.lazyScroll,
        scrollIndex: args.scrollIndex,
        // Board Row item content
        items: (() => {
          let items;
          switch (args.layout) {
            case 'card':
              items = getItems(CardVerticalLarge);
              break;
            default:
              items = getItems(Tile);
          }
          return [
            {
              title: 'Horizontal Card',
              type: CardHorizontal
            },
            ...items
          ];
        })(),
        // Layout will default to standard if not specified
        layout: args.layout,
        // Boolean to show view all tile at end of board rows. Will not show if onEnter is not specified
        viewAll: args.viewAll,
        // sync or async function that will generate a final src if specified
        srcCallback
      };
      return {
        Column: {
          type: Column,
          style: {
            itemSpacing: 100
          },
          items: [boardRow, boardRow]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

Basic.args = {
  gradientColor: '#E6004A',
  backgroundColorFocus: undefined,
  layout: 'standard',
  viewAll: true,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  lazyScroll: true
};
Basic.argTypes = {
  gradientColor: { control: 'color' },
  backgroundColorFocus: { control: 'color' },
  layout: {
    control: {
      type: 'select',
      options: ['standard', 'hero', 'poster', 'card', 'square', 'squareSmall'],
      defaultValue: 'standard'
    }
  },
  scrollIndex: {
    control: 'number'
  },
  alwaysScroll: {
    control: 'boolean'
  },
  neverScroll: {
    control: 'boolean'
  },
  lazyScroll: {
    control: 'boolean'
  },
  viewAll: {
    control: 'boolean'
  }
};

Basic.parameters = {
  argActions: {}
};
