import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../utils/index.js';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';

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

MetadataTile.storyName = 'MetadataTile';

MetadataTile.args = {
  w: 400,
  title: 'Title',
  subtitle: [
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
  description: 'Description',
  logo: circle,
  logoTitle: 'Logo title',
  logoPosition: 'right',
  mode: 'unfocused'
};

MetadataTile.argTypes = {
  ...createModeControl({ summaryValue: MetadataTile.args.mode }),
  w: {
    control: 'number',
    description: 'Width of component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  subtitle: {
    control: 'object',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  description: {
    control: 'text',
    description: 'description text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logo: {
    control: 'select',
    options: ['none', circle],
    description: 'Image to use for logo',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logoTitle: {
    control: 'text',
    description: 'Title to use for logo in announcer',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logoPosition: {
    control: 'select',
    options: ['right', 'left'],
    description: 'Position logo on the left/right side',
    table: {
      defaultValue: { summary: 'right' }
    }
  }
};
