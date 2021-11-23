import lng from '@lightningjs/core';
import TileIcon from '.';
import mdx from './TileIcon.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import blacktile from '../../Styles/assets/black_background_tile.png';

export default {
  title: 'Elements / TileIcon',
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
        Tile: {
          type: TileIcon,
          src: blacktile,
          icon: lightning,
          w: 320,
          h: 180
        }
      };
    }
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
Basic.argTypes = {
  focused: { control: 'boolean' }
};
