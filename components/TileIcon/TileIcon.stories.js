import lng from 'wpe-lightning';
import { rgba2argb } from '../../utils';

import TileIcon from '.';
import Row from '../Row';
import mdx from './TileIcon.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';
import blacktile from '../Styles/black_background_tile.png';

export default {
  title: 'TileIcon',
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
        TileIcon: {
          type: TileIcon,
          src: blacktile,
          icon,
          w: 320,
          h: 180,
          iconColor: rgba2argb(args.iconColor),
          iconW: args.iconW,
          iconH: args.iconH,
          blur: args.blur,
          radius: args.radius,
          shadow: {
            color: rgba2argb(args.color)
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TileIcon');
      }
    }
  };
Basic.args = {
  iconColor: 'rgba(255,255,255,1)',
  iconW: 50,
  iconH: 50,
  blur: 0,
  radius: 16,
  color: 'rgba(63,92,30,0.7)'
};
Basic.argTypes = {
  iconColor: {
    control: 'color'
  },
  iconW: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  iconH: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  focused: { control: 'boolean' },
  blur: {
    control: {
      type: 'range',
      min: 0,
      max: 4,
      step: 0.5
    }
  },
  radius: {
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
        ? () => component.tag('TileIcon')
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
              type: TileIcon,
              src: blacktile,
              icon,
              w: 320,
              h: 180,
              radius: 8
            },
            {
              type: TileIcon,
              src: blacktile,
              icon,
              w: 320,
              h: 180,
              radius: 8
            },
            {
              type: TileIcon,
              src: blacktile,
              icon,
              w: 320,
              h: 180,
              radius: 8
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
