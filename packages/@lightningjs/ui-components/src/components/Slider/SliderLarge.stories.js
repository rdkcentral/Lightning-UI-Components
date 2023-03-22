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
import Slider from './SliderLarge.js';
import mdx from './Slider.mdx';
import { createModeControl } from '../../docs/utils';
import TextBox from '../TextBox';
import { CATEGORIES } from '../../docs/constants';
import { useArgs } from '@storybook/client-api';

export default {
  title: `${CATEGORIES[512]}/SliderLarge`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  const [{ value }, updateArgs] = useArgs();
  return class Basic extends lng.Component {
    static _template() {
      return {
        Slider: {
          type: Slider,
          value: value,
          signals: {
            onChange: true
          }
        }
      };
    }
    // update arg control when value changes
    onChange(value) {
      updateArgs({ value });
    }
  };
};

Basic.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  mode: 'focused'
};

Basic.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  min: {
    control: 'number',
    description: 'Lower bound of value',
    table: { defaultValue: { summary: 0 } }
  },
  max: {
    control: 'number',
    description: 'Upper bound of value',
    table: { defaultValue: { summary: 100 } }
  },
  value: {
    control: 'number',
    description: 'Current value',
    table: { defaultValue: { summary: '0 or min' } }
  },
  step: {
    control: 'number',
    description: '+/- value on change',
    table: { defaultValue: { summary: 1 } }
  }
};

export const SignalHandlingLarge = () =>
  class SignalHandling extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Slider: {
          type: Slider,
          y: 20,
          step: 10,
          value: 30,
          w: 328,
          signals: {
            onChange: true
          }
        },
        Text: {
          y: 60,
          type: TextBox
        }
      };
    }

    onChange(value) {
      this.tag('Text').content = `Value: ${value}`;
    }
  };

SignalHandlingLarge.args = {
  mode: 'focused'
};

SignalHandlingLarge.argTypes = createModeControl({ summaryValue: 'focused' });

SignalHandlingLarge.parameters = {
  storyDetails:
    'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'
};
