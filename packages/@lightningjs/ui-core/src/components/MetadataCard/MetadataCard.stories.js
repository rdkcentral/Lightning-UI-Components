import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import utils from '../../utils';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { default as MetadataCardComponent } from '.';
import mdx from './MetadataCard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataCard`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const MetadataCard = () =>
  class MetadataCard extends lng.Component {
    static _template() {
      return {
        MetadataCard: {
          type: MetadataCardComponent
        }
      };
    }
  };

MetadataCard.storyName = 'MetadataCard';
MetadataCard.args = {
  w: 400,
  title: 'Title',
  subtitle: [
    '94%',
    {
      icon: lightningbolt,
      style: { color: utils.getHexColor('00ff00') },
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

MetadataCard.argTypes = {
  ...createModeControl({ summaryValue: MetadataCard.args.mode }),
  w: {
    control: 'number',
    description: 'Width of component',
    table: {
      defaultValue: { summary: 400 }
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
    control: 'text',
    description: 'Subtitle content',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logo: {
    options: ['none', circle],
    control: 'select',
    description: 'Image to use for logo',
    table: {
      defaultValue: { summary: 'none' }
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
    options: ['right', 'left'],
    control: 'select',
    description: 'Position logo on the left/right side',
    table: {
      defaultValue: { summary: 'right' }
    }
  }
};
