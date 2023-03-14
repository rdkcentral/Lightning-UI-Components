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
import { createModeControl, generateSubStory } from '../../docs/utils';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from '../../docs/constants';
import { context } from '../../globals';
import utils from '../../utils';
import Icon from '../Icon';
import { default as KeyboardInputComponent } from './KeyboardInput';
import { default as KeyboardQwertyComponent } from './KeyboardQwerty';
import { default as KeyboardEmailComponent } from './KeyboardEmail';
import { Keyboard } from './Keyboard.stories';
import { Input as InputStory } from '../Input/Input.stories';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';

export default {
  title: `${CATEGORIES[8]}/KeyboardInput`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

function getCommponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{ type: Icon, icon: lightning }];
      break;
    case 'eye':
      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];
      break;
    case 'eyeHide':
      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];
      break;
  }
  return arr;
}

// creates shared arg types for Keyboard Input stories
const sharedKeyboardArgTypes = createModeControl({
  options: ['focused'],
  summaryValue: 'focused'
});

export const InputWithQwerty = () =>
  class InputWithQwerty extends lng.Component {
    static _template() {
      return {
        InputWithQwerty: {
          type: KeyboardInputComponent,
          keyboardType: KeyboardQwertyComponent,
          input: {
            eyebrow: 'Search',
            helpText: 'Main'
          }
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };
const sharedInputArgTypes = {
  prefix: {
    control: 'radio',
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'icon', 'eye', 'eyeHide'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

InputWithQwerty.args = {
  centerKeyboard: false,
  centerKeys: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};

InputWithQwerty.argTypes = {
  ...Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

InputWithQwerty.parameters = {
  tag: 'InputWithQwerty'
};

InputWithQwerty.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithQwerty')._Input.prefix = [];
    } else {
      component.tag('InputWithQwerty')._Input.prefix =
        getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithQwerty')._Input.suffix = [];
    } else {
      component.tag('InputWithQwerty')._Input.suffix =
        getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'InputWithQwerty',
  baseStory: InputWithQwerty,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});

export const InputWithEmail = () =>
  class InputWithEmail extends lng.Component {
    static _template() {
      return {
        InputWithEmail: {
          type: KeyboardInputComponent,
          keyboardType: KeyboardEmailComponent,
          input: {
            eyebrow: 'Email Address',
            helpText: 'Help Text'
          }
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

InputWithEmail.args = {
  centerKeyboard: false,
  centerKeys: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};

InputWithEmail.argTypes = {
  ...Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};

InputWithEmail.parameters = {
  tag: 'InputWithEmail'
};

InputWithEmail.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithEmail')._Input.prefix = [];
    } else {
      component.tag('InputWithEmail')._Input.prefix =
        getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithEmail')._Input.suffix = [];
    } else {
      component.tag('InputWithEmail')._Input.suffix =
        getCommponentArray(suffix);
    }
  }
};

generateSubStory({
  componentName: 'InputWithEmail',
  baseStory: InputWithEmail,
  subStory: InputStory,
  targetProperty: 'input',
  include: ['password', 'mask']
});
