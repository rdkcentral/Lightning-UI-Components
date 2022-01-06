import lng from '@lightningjs/core';

import CardArtwork from '.';
import mdx from './CardArtwork.mdx';
import parksnrec from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import { rgba2argb } from '../../utils';
export default {
  title: 'Elements/CardArtwork',
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
        CardArtwork: {
          type: CardArtwork,
          src: parksnrec,
          h: 200,
          w: 400,
          circleImage: args.circleImage,
          blurBackground: args.blurBackground,
          blurBackgroundColor: rgba2argb(args.blurBackgroundColor)
        }
      };
    }

    _getFocused() {
      return this.tag('CardArtwork');
    }
  };
Basic.args = {
  blurBackgroundColor: 'rgba(13,13,15,0.3216)',
  circleImage: false,
  blurBackground: false
};
Basic.argTypes = {
  circleImage: { control: 'boolean' },
  blurBackground: { control: 'boolean' },
  blurBackgroundColor: { control: 'color' }
};
Basic.parameters = {
  argActions: {
    blurBackgroundColor: (color, component) => {
      component.tag('CardArtwork').blurBackgroundColor = color
        ? rgba2argb(color)
        : null;
    }
  }
};
