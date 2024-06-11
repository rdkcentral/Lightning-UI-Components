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
import { default as ListItemSliderComponent } from './ListItemSlider';
// import { createModeControl } from '../../docs/utils';
// import { Basic as SliderStory } from '../Slider/Slider.stories';
//Added this import below
import { useArgs } from '@storybook/client-api';

/**
 * A ListItem component with slider functionality
 */

export default {
  title: 'Components/ListItem/ListItemSlider'
};

//Added a bunch of stuff in this block below to match
// the slider.stories
export const ListItemSlider = () => {
  const [{ value }, updateArgs] = useArgs();
  return class ListItemSlider extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSliderComponent,
          value: value,
          signals: {
            onSliderChange: true
          }
        }
      };
    }
    // update arg control when value changes
    onSliderChange(value) {
      updateArgs({ value });
    }
  };
};

//Commented out args below that get don't need testing
// but feel free to add them back in.
ListItemSlider.args = {
  // title: 'List Item',
  value: 50,
  // shouldCollapse: false,
  // mode: 'focused',
  max: 100,
  min: 0
};

ListItemSlider.argTypes = {
  // ...createModeControl({ summaryValue: 'focused' }),
  // title: {
  //   control: 'text',
  //   description: 'Title text',
  //   table: {
  //     defaultValue: { summary: 'undefined' },
  //     type: { summary: 'string' }
  //   }
  // },
  value: {
    control: 'number',
    description: 'Current slider value',
    table: {
      defaultValue: { summary: 'undefined' },
      type: { summary: 'number' }
    }
  },
  // shouldCollapse: {
  //   control: 'boolean',
  //   description:
  //     'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',
  //   table: {
  //     defaultValue: { summary: false },
  //     type: { summary: 'boolean' }
  //   }
  // },
  max: {
    control: 'number',
    description: 'Upper bound of value',
    table: {
      defaultValue: { summary: 100 },
      type: { summary: 'number' }
    }
  },
  min: {
    control: 'number',
    description: 'Lower bound of value',
    table: {
      defaultValue: { summary: 0 },
      type: { summary: 'number' }
    }
  }
};

//Added this block below because slider.stories has it as well

// ListItemSlider.argActions = {
//   shouldCollapse: (shouldCollapse, component) => {
//     component.tag('ListItemSlider').shouldCollapse = shouldCollapse;
//   }
// };

// export const ListItemSliderSignal = () =>
//   class SignalHandling extends lng.Component {
//     static _template() {
//       return {
//         flex: { direction: 'column' },
//         ListItemSlider: {
//           type: ListItemSlider,
//           y: 20,
//           step: 1,
//           value: 30,
//           w: 328,
//           signals: {
//             onChange: true
//           }
//         },
//         Text: {
//           y: 60,
//           type: TextBox
//         }
//       };
//     }

//     onChange(value) {
//       this.tag('Text').content = `Value: ${value}`;
//     }
//   };

// ListItemSliderSignal.args = {
//   mode: 'focused'
// };

// ListItemSliderSignal.argTypes = createModeControl({ summaryValue: 'focused' });

// ListItemSliderSignal.parameters = {
//   storyDetails:
//     'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'
// };
