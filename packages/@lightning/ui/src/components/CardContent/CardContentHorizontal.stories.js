import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { default as CardContentHorizontalComponent } from './CardContentHorizontal';
import { Icon } from '@lightning/ui-core';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../StorybookConstants';

export default {
  title: `${CATEGORIES[128]}/CardContentHorizontal`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentHorizontal = () =>
  class CardContentHorizontal extends lng.Component {
    static _template() {
      return {
        CardContentHorizontal: {
          type: CardContentHorizontalComponent,
          src: tileImage,
          metadata: {
            provider: {
              providers: [
                {
                  type: Icon,
                  w: 96,
                  h: 48,
                  icon: xfinityLogo
                }
              ]
            }
          }
        }
      };
    }
  };
CardContentHorizontal.args = {
  collapseToMetadata: false,
  mode: 'focused',
  ...CardContent.args
};
CardContentHorizontal.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  shouldCollapse: {
    control: 'boolean',
    description: controlDescriptions.shouldCollapse,
    table: {
      defaultValue: { summary: false }
    }
  },
  collapseToMetadata: {
    control: 'boolean',
    description: controlDescriptions.collapseToMetadata,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
};
CardContentHorizontal.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHorizontal')
};

generateSubStory({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});

CardContentHorizontal.storyName = 'CardContentHorizontal';
