import lng from '@lightningjs/core';
import { default as ControlComponent } from './index.js';
import mdx from './Control.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../../../ui/src/StorybookConstants.js';

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
    description: controlDescriptions.fixed,
    table: {
      defaultValue: { summary: 'false' }
    }
  },
  w: {
    control: 'number',
    defaultValue: 200,
    description:
      'When the fixed property is true, this will set the width of the component',
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
    description:
      'Logo to be placed to the left of title. If icon and logo are both set, logo will take precedence for what is rendered and icon will be ignored',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    defaultValue: false,
    description:
      'When in unfocused or disabled mode, if this flag is true the title will collapse (when focused, it will always be expanded)',
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
