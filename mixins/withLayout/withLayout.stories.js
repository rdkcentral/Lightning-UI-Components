import lng from '@lightningjs/core';
import mdx from './withLayout.mdx';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import { Tile } from '../../elements';

export default {
  title: 'Mixins/withLayout',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  return class Basic extends lng.Component {
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

Basic.args = {
  ratioX: 16,
  ratioY: 9,
  upCount: 3,
  circle: false
};

Basic.argTypes = {
  ratioX: { control: 'number' },
  ratioY: { control: 'number' },
  upCount: { control: 'number' },
  circle: { control: 'boolean' }
};

Basic.parameters = {
  argActions: Object.keys(Basic.args).reduce((acc, curr) => {
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
