import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../utils/index.js';
import { createModeControl } from '../../../storybook/index.js';

import { default as MetadataTileComponent } from '.';
import mdx from './MetadataTile.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataTile`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const MetadataTile = args =>
  class MetadataTile extends lng.Component {
    static _template() {
      return {
        MetadataTile: {
          type: MetadataTileComponent,
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
      return this.tag('MetadataTile');
    }
  };

MetadataTile.argTypes = {
  ...createModeControl(),
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
        style: { color: getHexColor('00ff00') },
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
            style: { color: getHexColor('00ff00') },
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
    defaultValue: '',
    table: {
      defaultValue: { summary: '' }
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
