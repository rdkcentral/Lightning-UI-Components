import lng from '@lightningjs/core';
import { ListItemPicker } from '.';
import mdx from './ListItemPicker.mdx';

export default {
  title: 'Patterns/ListItemPicker',
  parameters: {
    tag: 'ListItem',
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemPicker,
          title: args.title,
          collapse: args.collapse,
          size: args.size,
          backgroundType: args.backgroundType,
          options: args.options,
          selectedOptionIndex: args.selectedOptionIndex
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }

    $listItemPickerChanged(selected, index) {
      args.listItemPickerChanged(selected, index);
    }
  };
Basic.args = {
  backgroundType: 'fill',
  focused: false,
  options: ['sub1', 'sub2', 'sub3'],
  title: 'List Item',
  collapse: false,
  size: 'small',
  selectedOptionIndex: 0
};
Basic.argTypes = {
  listItemPickerChanged: {
    action: '$listItemPickerChanged'
  },
  size: {
    control: {
      type: 'radio',
      options: ['small', 'large']
    }
  },
  backgroundType: {
    control: {
      type: 'radio',
      options: ['fill', 'float', 'ghost']
    }
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ListItem')
        : () => {};
      component._refocus();
    }
  }
};
