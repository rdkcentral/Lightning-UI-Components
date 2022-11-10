import lng from '@lightningjs/core';
import ListItemComponent from './ListItem';
import mdx from './ListItem.mdx';
import { createModeControl } from '@lightning/ui-core/storybook/index.js';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { Checkbox, Radio, Toggle } from '@lightning/ui-core';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/ListItem`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItem = () =>
  class ListItem extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemComponent
        }
      };
    }
  };

ListItem.storyName = 'ListItem';

const sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    defaultValue: 'Title',
    table: {
      defaultValue: { summary: 'Title' }
    },
    control: 'text',
    description: 'Title text'
  },
  description: {
    defaultValue: 'Description',
    table: {
      defaultValue: { summary: 'Description' }
    },
    control: 'text',
    description: 'Description text'
  },
  shouldCollapse: {
    control: 'boolean',
    defaultValue: false,
    description:
      'If true will collapse the Title when in unfocused or disabled mode',
    table: {
      defaultValue: { summary: 'false' }
    }
  },
  prefix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  },
  prefixLogo: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'xfinity'],
    description: 'Logo to the right of title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffix: {
    control: 'radio',
    defaultValue: null,
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'null' }
    }
  },
  suffixLogo: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'xfinity'],
    description: 'Logo to the left of title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

const logoSet = {
  none: null,
  xfinity: xfinity
};

const elementSet = {
  toggle: {
    type: Toggle,
    checked: true
  },
  radio: {
    type: Radio,
    checked: true
  },
  checkbox: {
    type: Checkbox,
    checked: true
  }
};

const sharedArgActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('ListItem').prefix = [];
    } else {
      component.tag('ListItem').prefix = elementSet[prefix];
    }
  },
  prefixLogo: (prefixLogo, component) => {
    component.tag('ListItem').prefixLogo = logoSet[prefixLogo];
  },
  suffixLogo: (suffixLogo, component) => {
    component.tag('ListItem').suffixLogo = logoSet[suffixLogo];
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('ListItem').suffix = [];
    } else {
      component.tag('ListItem').suffix = elementSet[suffix];
    }
  }
};

ListItem.args = {
  title: 'List Item',
  description: 'Description'
};

ListItem.argTypes = sharedArgTypes;
ListItem.parameters = { argActions: sharedArgActions };
