import lng from '@lightningjs/core';
import { default as ListItemPickerComponent } from './ListItemPicker';
import mdx from './ListItemPicker.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/ListItemPicker`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItemPicker = args =>
  class ListItemPicker extends lng.Component {
    static _template() {
      return {
        ListItemPicker: {
          type: ListItemPickerComponent,
          options: args.options
        }
      };
    }
  };

ListItemPicker.storyName = 'ListItemPicker';

ListItemPicker.args = {
  title: 'List Item',
  options: ['Description1', 'Description2', 'Description3']
};

ListItemPicker.argTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'Title text'
  },
  shouldCollapse: {
    control: 'boolean',
    defaultValue: false,
    description:
      'When in unfocused or disabled mode,if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: 'false' }
    }
  }
};
