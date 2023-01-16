import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import CardContentVerticalComponent from './CardContentVertical';
import { Icon } from '@lightning/ui-core';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../StorybookConstants';

export default {
  title: `${CATEGORIES[128]}/CardContentVertical`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentVertical = args =>
  class CardContentVertical extends lng.Component {
    static _template() {
      return {
        CardContentVertical: {
          type: CardContentVerticalComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
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
CardContentVertical.args = {
  shouldCollapse: false,
  ...CardContent.tileProps.args
};
CardContentVertical.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  shouldCollapse: {
    defaultValue: false,
    table: {
      defaultValue: { summary: false }
    },
    control: 'boolean',
    description: controlDescriptions.shouldCollapse
  },
  ...CardContent.tileProps.argTypes
};

CardContentVertical.storyName = 'CardContentVertical';
CardContentVertical.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVertical')
};

generateSubStory({
  componentName: 'CardContentVertical',
  baseStory: CardContentVertical,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
