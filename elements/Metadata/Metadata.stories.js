import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
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
          w: args.w,
          h: args.h,
          title: args.title,
          description: args.description,
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
          logo: args.showIcon ? circle : null,
          cta: args.showCTA ? args.cta : null
        }
      };
    }

    _getFocused() {
      return this.tag('Metadata');
    }
  };
Basic.args = {
  w: 400,
  h: 300,
  title: 'Title',
  description: 'Description',
  cta: 'Watch on Netflix',
  showCTA: false,
  showIcon: true
};
Basic.argTypes = {
  w: { control: 'number' },
  h: { control: 'number' },
  title: { control: 'text' },
  description: { control: 'text' },
  cta: { control: 'text' },
  showCTA: { control: 'boolean' },
  showIcon: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {}
};
