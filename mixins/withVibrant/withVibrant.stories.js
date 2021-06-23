import lng from '@lightningjs/core';
import withVibrant from '.';
import mdx from './withVibrant.mdx';

import Row from '../../layout/Row';
import Tile from '../../elements/Tile';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import parksFocus from '../../assets/images/Parks_and_Recreation_16x9_NoTitle.jpg';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export default {
  title: 'Mixins/withVibrant',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      const w = 320;
      const h = 180;
      return {
        x: 60,
        y: 60,
        VibrantRow: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              type: withVibrant(Tile),
              title: 'trolls',
              src: trolls,
              w,
              h
            },
            {
              type: withVibrant(Tile),
              title: 'parks',
              src: parks,
              focusSrc: parksFocus,
              w,
              h
            },
            {
              type: withVibrant(Tile),
              title: 'jurassic',
              src: jurassic,
              w,
              h
            },
            {
              type: withVibrant(Tile),
              title: 'pets',
              src: pets,
              w,
              h
            },
            {
              type: withVibrant(Tile),
              title: 'generic',
              w,
              h
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('VibrantRow');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
