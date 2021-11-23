import lng from '@lightningjs/core';
import TileCircle from '.';
import mdx from './TileCircle.mdx';

export default {
  title: 'Elements / TileCircle',
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
          type: TileCircle,
          src: 'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5299164605973043111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100',
          w: 320,
          h: 180
        }
      };
    }
  };
Basic.args = {
  blurBackgroundColor: 'rgba(13,13,15,0.3216)',
  focused: false,
  shouldAnimate: true
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  blurBackgroundColor: { control: 'color' }
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
