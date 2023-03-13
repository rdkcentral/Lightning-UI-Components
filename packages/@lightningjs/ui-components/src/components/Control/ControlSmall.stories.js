/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import { ControlSmall as ControlSmallComponent } from '.';
import mdx from './Control.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';
import { controlDescriptions } from '../../docs/constants';

export default {
  title: `${CATEGORIES[2]}/ControlSmall`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ControlSmall = () =>
  class ControlSmall extends lng.Component {
    static _template() {
      return {
        Control: {
          type: ControlSmallComponent
        }
      };
    }
  };

const sharedArgTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  fixed: {
    control: 'boolean',
    description: controlDescriptions.fixed,
    table: {
      defaultValue: { summary: false }
    }
  },
  w: {
    control: 'number',
    description:
      'When the fixed property is true, this will set the width of the component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  icon: {
    control: 'radio',
    options: ['none', 'lightning'],
    description: 'Icon to the left of title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description:
      'Logo to be placed to the left of title. If icon and logo are both set, logo will take precedence for what is rendered and icon will be ignored',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description:
      'When in unfocused or disabled mode, if this flag is true the title will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: false }
    }
  },
  justify: {
    control: 'radio',
    options: ['left', 'center', 'right'],
    description:
      'Justification of control content; only applies to the title when prefix and title are both defined',
    table: {
      defaultValue: { summary: 'center' }
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

ControlSmall.storyName = 'ControlSmall';
ControlSmall.args = {
  title: 'Control',
  fixed: false,
  w: 200,
  icon: 'none',
  logo: 'none',
  shouldCollapse: false,
  justify: 'center',
  mode: 'focused'
};

ControlSmall.argTypes = {
  ...sharedArgTypes
};

ControlSmall.parameters = {
  argActions: {
    ...sharedArgActions
  }
};
