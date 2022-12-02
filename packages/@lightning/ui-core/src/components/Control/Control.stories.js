import lng from '@lightningjs/core';
import { default as ControlComponent } from './index.js';
import mdx from './Control.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from '../../../storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/Control`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Control = () =>
  class Control extends lng.Component {
    static _template() {
      return {
        Control: {
          type: ControlComponent
        }
      };
    }
  };

const sharedArgs = {
  icon: 'none',
  logo: 'none',
  shouldCollapse: false
};

const sharedArgTypes = {
  ...createModeControl({ defaultValue: 'focused' }),
  title: {
    control: 'text',
    defaultValue: 'Control',
    description: 'Title text',
    table: {
      defaultValue: { summary: '' }
    }
  },
  fixed: {
    control: 'boolean',
    defaultValue: false,
    description:
      'Stops the width from being calculated dynamically based on content and will instead use the `w` property',
    table: {
      defaultValue: { summary: 'false' }
    }
  },
  w: {
    control: 'number',
    defaultValue: 200,
    description:
      'Width of component can be changed only when fixed is set to true',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  icon: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'lightning'],
    description: 'Icon to the left of title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logo: {
    control: 'radio',
    defaultValue: 'none',
    options: ['none', 'xfinity'],
    description: 'Logo to the left of title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    defaultValue: false,
    description:
      'If true will collapse the Title when in unfocused or disabled mode',
    table: {
      defaultValue: { summary: 'false' }
    }
  }
};

const iconSet = {
  lightning: lightning,
  none: null
};

const logoSet = {
  none: null,
  xfinity: xfinity
};

const sharedArgActions = {
  icon: (iconName, component) => {
    component.tag('Control').icon = iconSet[iconName];
  },
  logo: (logoName, component) => {
    component.tag('Control').logo = logoSet[logoName];
  },
  shouldCollapse: (shouldCollapse, component) => {
    component.tag('Control').shouldCollapse = shouldCollapse;
  }
};

Control.args = {
  ...sharedArgs
};

Control.argTypes = {
  ...sharedArgTypes
};

Control.parameters = {
  argActions: {
    ...sharedArgActions
  }
};

// // Control Small version on Storybook
// export const Small = () =>
//   class Small extends lng.Component {
//     static _template() {
//       return {
//         Control: {
//           type: ControlSmall
//         }
//       };
//     }
//   };

// Small.argTypes = sharedArgTypes;
// Small.parameters = { argActions: sharedArgActions };
