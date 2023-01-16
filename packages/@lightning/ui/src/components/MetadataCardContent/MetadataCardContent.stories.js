import lng from '@lightningjs/core';
import { default as MetadataCardContentComponent } from '.';
import mdx from './MetadataCardContent.mdx';
import xfinityProviderLogoSquare from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataCardContent`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const MetadataCardContent = () =>
  class MetadataCardContent extends lng.Component {
    static _template() {
      return {
        MetadataCardContent: {
          type: MetadataCardContentComponent
        }
      };
    }
  };

MetadataCardContent.storyName = 'MetadataCardContent';

// used to show example of longer text in description
const descriptionSample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

MetadataCardContent.argTypes = {
  ...createModeControl(),
  w: {
    defaultValue: 600,
    table: {
      defaultValue: { summary: 600 }
    },
    control: 'number',
    description: 'Width of component'
  },
  h: {
    defaultValue: 250,
    table: {
      defaultValue: { summary: 250 }
    },
    control: 'number',
    description: 'Height of component'
  },
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'Title text'
  },
  description: {
    defaultValue: descriptionSample,
    table: {
      defaultValue: { summary: 'Description' }
    },
    control: 'text',
    description: 'Description text'
  },
  details: {
    defaultValue: 'Details',
    table: {
      defaultValue: { summary: 'Details' }
    },
    control: 'text',
    description: 'Details text'
  },
  visibleCount: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
    defaultValue: 3,
    description: 'Number of visible providers',
    table: {
      defaultValue: { summary: 3 }
    }
  }
};

MetadataCardContent.parameters = {
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
