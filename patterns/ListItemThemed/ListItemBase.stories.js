import lng from '@lightningjs/core';
import ListItemBase from './ListItemBase';
import mdx from './ListItemBase.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { Checkbox, Radio, Toggle } from '../../elements';

export default {
  title: 'Patterns / ListItemThemed',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItemBase: {
          type: ListItemBase
        }
      };
    }
  };

const sharedArgTypes = {
  ...createModeControl(),
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
      component.tag('ListItemBase').prefix = [];
    } else {
      component.tag('ListItemBase').prefix = elementSet[prefix];
    }
  },
  prefixLogo: (prefixLogo, component) => {
    component.tag('ListItemBase').prefixLogo = logoSet[prefixLogo];
  },
  suffixLogo: (suffixLogo, component) => {
    component.tag('ListItemBase').suffixLogo = logoSet[suffixLogo];
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('ListItemBase').suffix = [];
    } else {
      component.tag('ListItemBase').suffix = elementSet[suffix];
    }
  }
};

Basic.args = {
  title: 'List Item',
  description: 'Description'
};

Basic.argTypes = sharedArgTypes;
Basic.parameters = { argActions: sharedArgActions };
