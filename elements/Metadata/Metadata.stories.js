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
          title: args.title,
          subtitle: args.subtitle,
          description: args.description,
          logo: args.logo !== 'none' ? circle : null,
          logoTitle: args.logo !== 'none' ? args.logoTitle : null,
          logoPosition: args.logoPosition
        }
      };
    }

    _getFocused() {
      return this.tag('Metadata');
    }
  };

Basic.argTypes = {
  w: {
    defaultValue: 400,
    table: {
      defaultValue: { summary: 400 }
    },
    control: 'number',
    description: 'width of component'
  },
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'title text'
  },
  subtitle: {
    defaultValue: [
      '94%',
      {
        icon: lightningbolt,
        color: getHexColor('00ff00'),
        title: 'Green Lightning Bolt'
      },
      '86%',
      {
        icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
        title: 'Rotten Tomatoes rating'
      }
    ],
    table: {
      defaultValue: {
        summary: [
          '94%',
          {
            icon: lightningbolt,
            color: getHexColor('00ff00'),
            title: 'Green Lightning Bolt'
          },
          '86%',
          {
            icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
            title: 'Rotten Tomatoes rating'
          }
        ]
      }
    },
    control: 'text',
    description: 'subtitle content'
  },
  description: {
    defaultValue: 'Description',
    table: {
      defaultValue: { summary: 'Description' }
    },
    control: 'text',
    description: 'description text'
  },
  logo: {
    defaultValue: circle,
    table: {
      defaultValue: { summary: circle }
    },
    control: {
      type: 'select',
      options: ['none', circle]
    },
    description: 'image to use for logo'
  },
  logoTitle: {
    defaultValue: 'Logo title',
    table: {
      defaultValue: { summary: 'Logo title' }
    },
    control: 'text',
    description: 'title to use for logo in announcer'
  },
  logoPosition: {
    defaultValue: 'right',
    table: {
      defaultValue: { summary: 'right' }
    },
    control: {
      type: 'select',
      options: ['right', 'left']
    },
    description: 'position logo on the left/right side'
  }
};
