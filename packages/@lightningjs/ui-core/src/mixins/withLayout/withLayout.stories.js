import lng from '@lightningjs/core';
import mdx from './withLayout.mdx';
import { Tile } from '../../components/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withLayout`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withLayout = () => {
  return class withLayout extends lng.Component {
    static _template() {
      return {
        Item: {
          type: Tile,
          artwork: {
            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',
            mode: 'contain'
          }
        }
      };
    }
  };
};

withLayout.storyName = 'withLayout';

withLayout.args = {
  ratioX: 16,
  ratioY: 9,
  upCount: 3,
  circle: false
};

withLayout.argTypes = {
  ratioX: {
    control: 'number',
    description: 'The units of x resolution relative to the screen height',
    table: { defaultValue: { summary: 0 } }
  },
  ratioY: {
    control: 'number',
    description: 'The units of y resolution relative to the screen width',
    table: { defaultValue: { summary: 0 } }
  },
  upCount: {
    control: 'number',
    description:
      'The number of items that should be displayed within screen bounds',
    table: { defaultValue: { summary: 0 } }
  },
  circle: {
    control: 'boolean',
    description: 'Boolean changing format to circle if true',
    table: { defaultValue: { summary: false } }
  }
};

withLayout.parameters = {
  argActions: Object.keys(withLayout.args).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (val, component) => {
        component.tag('Item').itemLayout = {
          ...component.tag('Item').itemLayout,
          [curr]: val
        };
      }
    };
  }, {})
};
