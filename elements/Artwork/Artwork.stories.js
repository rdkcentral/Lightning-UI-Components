import lng from '@lightningjs/core';
import cast from '../../assets/images/chris_pratt.png';
import fallbackSrc from '../../assets/images/black_background_tile.png';
import verticalLogo from '../../assets/images/vertical-logo-test.png';
import Row from '../../layout/Row';
import Artwork from '.';
import mdx from './Artwork.mdx';
export default {
  title: 'Elements/Artwork',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const data = [
  '8501866671289235112',
  '6953338537551324112',
  '7615274088441709112',
  '5883799404534408112',
  '6669243132954134112'
];

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          items: [
            {
              type: Artwork,
              src: 'https://myriad.merlin.comcast.com/select/image?entityId=[ENTITY_ID]&width=640&ratio=3x4&rule=noTitle',
              fallbackSrc: fallbackSrc
            },
            {
              type: Artwork,
              src: 'https://myriad.merlin.comcast.com/select/image?entityId=[ENTITY_ID]&width=640&ratio=16x9',
              fallbackSrc: fallbackSrc
            },
            {
              type: Artwork,
              src: 'https://myriad.merlin.comcast.com/select/image?entityId=[ENTITY_ID]&width=640&ratio=1x1',
              fallbackSrc: fallbackSrc
            },
            {
              type: Artwork,
              src: cast,
              fallbackSrc: fallbackSrc
            },
            {
              type: Artwork,
              src: 'https://myriad.merlin.comcast.com/select/image?entityId=foobar&width=640&ratio=16x9',
              fallbackSrc: fallbackSrc
            }
          ].map((item, index) => {
            return {
              ...item,
              itemLayout: {
                ratioX: 16,
                ratioY: 9,
                upCount: 3
              },
              src: item.src.replace('[ENTITY_ID]', data[index])
            };
          })
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

Basic.args = {
  scale: false,
  blur: false,
  gradient: false,
  logo: false
};

Basic.argTypes = {
  scale: { control: 'boolean' },
  mode: {
    control: 'radio',
    defaultValue: undefined,
    options: [undefined, 'circle', 'square', 'contain']
  },
  itemLayout: {
    control: 'radio',
    defaultValue: '16:9',
    options: ['16:9', '3:4', '2:3', '1:1']
  },
  blur: { control: 'boolean' },
  gradient: { control: 'boolean' },
  logo: { control: 'boolean' }
};

Basic.parameters = {
  argActions: {
    scale: (scale, component) => {
      component.tag('Row').items.map(artwork => {
        artwork.style.imageScale = scale ? 1.2 : undefined;
      });
    },
    blur: (showBlur, component) => {
      component.tag('Row').items.map(artwork => {
        artwork.blur = showBlur;
      });
    },
    gradient: (showGradient, component) => {
      component.tag('Row').items.map(artwork => {
        artwork.gradient = showGradient;
      });
    },
    logo: (showLogo, component) => {
      component.tag('Row').items.map((artwork, index) => {
        if (showLogo) {
          if (1 === index) {
            artwork.logo = verticalLogo;
          } else {
            artwork.logo = `http://myriad.merlin.comcast.com/select/logo?entityId=${data[index]}&width=300&height=200&rule=Stations%20-%20white`;
          }
        } else {
          artwork.logo = undefined;
        }
      });
    },
    mode: (mode, component) => {
      component.tag('Row').items.map(artwork => {
        artwork.mode = mode;
      });
    },
    itemLayout: (layout, component) => {
      if (!layout) return;
      component.tag('Row').items.map(artwork => {
        const [x, y] = layout.split(':');
        artwork.itemLayout = {
          ratioX: x,
          ratioY: y,
          upCount: 5
        };
      });
    }
  }
};
