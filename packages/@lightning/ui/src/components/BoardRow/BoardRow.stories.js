import BoardRow from './BoardRow';
import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import mdx from './BoardRow.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context, utils, Tile } from '@lightning/ui-core';
import { CardContent, CardContentVertical, Column } from '@lightning/ui';

export default {
  title: `${CATEGORIES[64]}/BoardRow`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const cardData = {
  provider: {
    providers: [lightningbolt]
  },
  details: 'Details'
};

const getItems = type => {
  return [
    {
      src: '7245349740136736112',
      metadata: {
        title: 'Tenet',
        description:
          'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
        ...cardData
      },
      onEnter: () => {
        alert('Tenet card onEnter');
      }
    },
    {
      src: '7615274088441709112',
      metadata: {
        title: 'Antebellum',
        description:
          "Successful author Veronica Henley finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before it's too late.",
        ...cardData
      }
    },
    {
      src: '4787646614985090112',
      metadata: {
        title: 'Bill & Ted Face the Music',
        logo: lightningbolt,
        description:
          "Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.",
        ...cardData
      }
    },
    {
      src: '6366577040434117112',
      metadata: {
        title: 'Onward',
        description:
          'Two elven brothers embark on a quest to bring their father back for one day.',
        ...cardData
      }
    },
    {
      src: '5879798181352259112',
      metadata: {
        title: 'Fear The Walking Dead',
        description:
          'A Walking Dead spinoff set in Los Angeles, California. Follows two families who must band together to survive the undead apocalypse.',
        ...cardData
      }
    },
    {
      src: '6702815185485076112',
      metadata: {
        title: 'The New Mutants',
        description:
          'Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.',
        ...cardData
      }
    },
    {
      src: '7762245375893944112',
      metadata: {
        title: 'Wonder Woman 1984',
        description:
          'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing.',
        ...cardData
      }
    },
    {
      src: '5369987084856006112',
      metadata: {
        title: 'Vikings',
        description:
          'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
        ...cardData
      }
    },
    {
      src: '7108813814104030112',
      metadata: {
        title: 'The Invisible Man',
        description:
          "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        ...cardData
      }
    },
    {
      src: '6030648778584858112',
      metadata: {
        title: 'Birds Of Prey',
        description:
          'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
        ...cardData
      }
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
    let imgSrc;
    if (CardContentVertical.isPrototypeOf(type)) {
      imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=3x2`;
    } else {
      imgSrc = `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&height=${h}&rule=title`;
    }

    var img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      resolve({ src: imgSrc });
    };
    img.onerror = () => {
      // Fallback to default aspect ratio if not found
      resolve({
        src:
          type.prototype instanceof CardContentVertical
            ? `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=16x9&rule=noTitle`
            : `http://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=16x9`
      });
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
        w: utils.getWidthByUpCount(context.theme, 1),
        menuCard: {
          title: `${
            args.layout ? capitalizeFirstLetter(args.layout) : 'Standard'
          } Layout`,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis quam eget mi fermentum, a malesuada lectus convallis. Suspendisse potenti.',
          cta: 'View All',
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
              items = getItems(CardContentVertical);
              break;
            default:
              items = getItems(Tile);
          }
          return [
            {
              title: 'Horizontal Card',
              type: CardContent
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
          h: 776,
          style: {
            itemSpacing: 100
          },
          items: [boardRow, boardRow]
        }
      };
    }

    set args(args) {
      this.tag('Column').items.foreach(boardRow => boardRow.patch(args));
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

Basic.argTypes = {
  layout: {
    defaultValue: 'standard',
    description: 'layout of BoardRow items',
    table: {
      defaultValue: { summary: 'standard' }
    },
    control: {
      type: 'select',
      options: ['standard', 'hero', 'poster', 'card', 'square', 'squareSmall']
    }
  },
  scrollIndex: {
    defaultValue: 0,
    description:
      'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the BoardRow',
    table: {
      defaultValue: { summary: 0 }
    },
    control: 'number'
  },
  alwaysScroll: {
    defaultValue: false,
    description:
      'determines whether the row will stop scrolling as it nears the right to prevent white space',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
  neverScroll: {
    defaultValue: false,
    description:
      'if true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
  lazyScroll: {
    defaultValue: false,
    description:
      'will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean'
  },
  viewAll: {
    defaultValue: 'true',
    description:
      'determines if another MenuCard will be added at the end of the BoardRow',
    table: {
      defaultValue: { summary: true }
    },
    control: 'boolean'
  }
};

Basic.parameters = {};
