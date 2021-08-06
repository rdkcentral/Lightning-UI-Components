import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../Styles/Colors';

import MetadataHero from '.';
import mdx from './MetadataHero.mdx';

export default {
  title: 'Elements / MetadataHero',
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
        MetadataHero: {
          type: MetadataHero,
          w: args.w,
          h: args.h,
          title: args.title,
          subtitle: args.subtitle,
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
      return this.tag('MetadataHero');
    }
  };
Basic.args = {
  w: 670,
  h: 360,
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Short Description',
  cta: 'Call to action text',
  showCTA: true,
  showIcon: true
};
Basic.argTypes = {
  title: { control: 'text' },
  subtitle: { control: 'text' },
  description: { control: 'text' },
  cta: { control: 'text' },
  showCTA: { control: 'boolean' },
  showIcon: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {}
};
