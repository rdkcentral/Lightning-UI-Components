import lng from '@lightningjs/core';
import { rgba2argb } from '../../utils';

import TileCircle from '.';
import Row from '../../layout/Row';
import mdx from './TileCircle.mdx';

export default {
  title: 'Elements / TileCircle',
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
        TileCircle: {
          type: TileCircle,
          src:
            'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5299164605973043111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100',
          w: 320,
          h: 180,
          blurBackgroundColor: rgba2argb(args.blurBackgroundColor)
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TileCircle');
      }
    }
  };
Basic.args = {
  blurBackgroundColor: 'rgba(13,13,15,0.3216)'
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  blurBackgroundColor: { control: 'color' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TileCircle')
        : () => {};
      component._refocus();
    },
    blurBackgroundColor: (color, component) => {
      component.tag('TileCircle').blurBackgroundColor = color
        ? rgba2argb(color)
        : null;
    }
  }
};

export const XfinityTheme = () =>
  class Basic extends lng.Component {
    static _template() {
      const tileCircle = {
        type: TileCircle,
        w: 320,
        h: 180
      };
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              ...tileCircle,
              src:
                'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5299164605973043111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100'
            },
            {
              ...tileCircle,
              src:
                'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5019753201541604111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100'
            },
            {
              ...tileCircle,
              src:
                'http://rexsearch.g1.app.cloud.comcast.net/myriad/select/image?entityId=4703069175195008111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100'
            },
            {
              ...tileCircle,
              src:
                'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5039986756924604111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100'
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
