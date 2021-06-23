import lng from '@lightningjs/core';

import CardArtwork from '.';
import mdx from './CardArtwork.mdx';
import parksnrec from '../../assets/images/Parks_and_Recreation_16x9.jpg';

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
          badge: 'HD',
          progress: 0.5,
          badgeLocation: 'lowerLeft',
          h: 200,
          w: 400
        }
      };
    }

    _getFocused() {
      return this.tag('CardArtwork');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
