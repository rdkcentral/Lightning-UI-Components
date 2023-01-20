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
  ratioX: { control: 'number' },
  ratioY: { control: 'number' },
  upCount: { control: 'number' },
  circle: { control: 'boolean' }
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
