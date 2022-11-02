import lng from '@lightningjs/core';
import MetadataCardContent from '.';
import mdx from './MetadataCardContent.mdx';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataCardContent`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContent = () =>
  class CardContent extends lng.Component {
    static _template() {
      return {
        MetadataCardContent: {
          type: MetadataCardContent
        }
      };
    }
  };

// used to show example of longer text in description
const descriptionSample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

CardContent.argTypes = {
  ...createModeControl(),
  w: {
    defaultValue: 600,
    table: {
      defaultValue: { summary: 600 }
    },
    control: 'number',
    description: 'width of component'
  },
  h: {
    defaultValue: 250,
    table: {
      defaultValue: { summary: 250 }
    },
    control: 'number',
    description: 'height of component'
  },
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'title text'
  },
  description: {
    defaultValue: descriptionSample,
    table: {
      defaultValue: { summary: 'Description' }
    },
    control: 'text',
    description: 'description text'
  },
  details: {
    defaultValue: 'Details',
    table: {
      defaultValue: { summary: 'Details' }
    },
    control: 'text',
    description: 'details text'
  },
  visibleCount: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
    defaultValue: 3,
    description: 'number of visible providers',
    table: {
      defaultValue: { summary: 3 }
    }
  }
};

CardContent.parameters = {
  argActions: {
    visibleCount(visibleCount, component) {
      component.tag('MetadataCardContent').provider = {
        visibleCount: visibleCount,
        providers: Array(10).fill({
          icon: xfinityProviderLogoSquare,
          announce: 'xFinity'
        })
      };
    }
  }
};
