import lng from '@lightningjs/core';

import Tile from '.';
import mdx from './Tile.mdx';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';

export default {
  title: 'Elements / Tile',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Tile: {
          type: Tile,
          src: trolls,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 5
          }
        }
      };
    }
  };
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Tile')
        : () => {};
      component._refocus();
    }
  }
};
