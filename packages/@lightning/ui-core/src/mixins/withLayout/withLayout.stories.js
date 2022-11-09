import lng from '@lightningjs/core';
import mdx from './withLayout.mdx';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
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

export const Base = () => {
  return class Base extends lng.Component {
    static _template() {
      return {
        Item: {
          type: Tile,
          artwork: {
            src: parks,
            mode: 'contain'
          }
        }
      };
    }
  };
};

Base.args = {
  ratioX: 16,
  ratioY: 9,
  upCount: 3,
  circle: false
};

Base.argTypes = {
  ratioX: { control: 'number' },
  ratioY: { control: 'number' },
  upCount: { control: 'number' },
  circle: { control: 'boolean' }
};

Base.parameters = {
  argActions: Object.keys(Base.args).reduce((acc, curr) => {
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
