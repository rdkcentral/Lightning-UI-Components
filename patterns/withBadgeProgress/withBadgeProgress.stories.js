import lng from '@lightningjs/core';

import WithBadgeProgress from '.';
import mdx from './withBadgeProgress.mdx';
import Base from '../../elements/Base';
import Tile from '../../elements/Tile';
import withStyles from '../../mixins/withStyles';

import { rgba2argb } from '../../utils';

import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import withBadgeProgress from '.';

export default {
  title: 'Patterns / withBadgeProgress',
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
          type: withBadgeProgress(
            withStyles(Tile, { unfocused: { shadow: { alpha: 1 } } })
          ),
          src: jurassic,
          w: 320,
          h: 180,
          blur: args.blur,
          radius: args.radius,
          imgRadius: args.imgRadius,
          shadow: {
            w: 320,
            h: 180,
            x: 10,
            y: 10,
            zIndex: -1,
            texture: lng.Tools.getShadowRect(320, 180, args.radius, args.blur),
            color: rgba2argb(args.color)
          },
          badge: args.badge,
          badgeLocation: args.badgeLocation,
          progress: args.progress
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
  radius: 16,
  imgRadius: 16,
  color: 'rgba(63,92,30,0.7)',
  badge: '1:45',
  badgeLocation: 'lowerLeft',
  progress: 0.7
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
  radius: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5
    }
  },
  imgRadius: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5
    }
  },
  color: { control: 'color' },
  badgeLocation: {
    control: {
      type: 'select',
      options: ['upperLeft', 'upperRight', 'lowerLeft', 'lowerRight']
    }
  },
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.1
    }
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
