import lng from 'wpe-lightning';
import { rgba2argb } from '../../utils';

import Tile from '.';
import Row from '../Row';
import mdx from './Tile.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';
import minions1 from '../../assets/images/minions1.jpg';
import minions2 from '../../assets/images/minions2.jpg';

export default {
  title: 'Tile',
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
        Tile: {
          type: Tile,
          src: kabob,
          w: 320,
          h: 180,
          blur: args.blur,
          rounded: args.rounded,
          shadow: {
            color: rgba2argb(args.color)
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Tile');
      }
    }
  };
Basic.args = {
  blur: 0,
  rounded: 16,
  color: 'rgba(63,92,30,0.7)'
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  blur: {
    control: {
      type: 'range',
      min: 0,
      max: 4,
      step: 0.5
    }
  },
  rounded: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5
    }
  },
  color: { control: 'color' }
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

export const XfinityTheme = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              rounded: 8
            },
            {
              type: Tile,
              src: minions1,
              w: 320,
              h: 180,
              rounded: 8
            },
            {
              type: Tile,
              src: minions2,
              w: 320,
              h: 180,
              rounded: 8
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
