import lng from '@lightningjs/core';
import kabob from '../../assets/images/kabob_320x180.jpg';
import { Basic as TileBasic } from '../Tile/Tile.stories';
import mdx from './TileCheckbox.mdx';
import TileCheckbox from '.';

export default {
  title: 'Elements / TileCheckbox',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TileCheckbox: {
          type: TileCheckbox,
          src: kabob,
          w: 320,
          h: 180,
          checked: args.checked,
          placement: args.placement,
          shouldAnimate: args.shouldAnimate
        }
      };
    }
    _getFocused() {
      if (args.focused) {
        return this.tag('TileCheckbox');
      }
    }
  };

Basic.args = {
  ...TileBasic.args,
  checked: false
};

Basic.argTypes = {
  ...TileBasic.argTypes,
  checked: {
    control: { type: 'boolean' }
  },
  placement: {
    control: {
      type: 'radio',
      options: ['center', 'right', undefined]
    }
  }
};

Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TileCheckbox')
        : () => {};
      component._refocus();
    }
  }
};
