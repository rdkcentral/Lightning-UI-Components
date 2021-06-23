import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import { getHexColor } from '../../Styles/Colors';

import Metadata from '.';
import mdx from './Metadata.mdx';

export default {
  title: 'Elements/Metadata',
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
        Metadata: {
          type: Metadata,
          w: 400,
          h: 300,
          title: 'Title Title Title Title Title Title Title Title Title Title ',
          description:
            'Description Description Description Description Description Description Description Description Description Description ',
          data: [
            '94%',
            {
              icon: lightningbolt,
              color: getHexColor('00ff00'),
              title: 'Green Lightning Bolt'
            },
            '86%',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            }
          ],
          logo: circle,
          logoWidth: 1920,
          logoHeight: 1080,
          action: 'Watch on Netflix'
        }
      };
    }

    _getFocused() {
      return this.tag('Metadata');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
