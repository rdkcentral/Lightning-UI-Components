import lng from '@lightningjs/core';
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import CardContentVerticalSmallComponent from './CardContentVerticalSmall';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../StorybookConstants';

export default {
  title: `${CATEGORIES[128]}/CardContentVerticalSmall`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentVerticalSmall = args =>
  class CardContentVerticalSmall extends lng.Component {
    static _template() {
      return {
        CardContentVerticalSmall: {
          type: CardContentVerticalSmallComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse
        }
      };
    }
  };

CardContentVerticalSmall.storyName = 'CardContentVerticalSmall';

CardContentVerticalSmall.args = {
  mode: 'focused',
  ...CardContent.args
};
CardContentVerticalSmall.argTypes = {
  ...createModeControl({ summaryValue: CardContentVerticalSmall.args.mode }),
  shouldCollapse: {
    control: 'boolean',
    description: controlDescriptions.shouldCollapse,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
};
CardContentVerticalSmall.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')
};

generateSubStory({
  componentName: 'CardContentVerticalSmall',
  baseStory: CardContentVerticalSmall,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
