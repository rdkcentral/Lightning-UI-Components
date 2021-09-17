/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import Button from '.';
import withStyles from '../../mixins/withStyles';
import mdx from './Button.mdx';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Button',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          fixed: args.fixed,
          title: args.title,
          radius: args.radius,
          onEnter: args.onEnter
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Button');
      }
    }
  };
Basic.args = {
  title: 'Button',
  radius: 0
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  icon: { control: 'boolean' },
  onEnter: { action: 'onEnter' },
  radius: { control: { type: 'number', min: 0, max: 20 } },
  stroke: { control: 'boolean' },
  title: { control: 'text' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Button')
        : () => {};
      component._refocus();
    },
    icon: (isIcon, component) => {
      component.tag('Button').icon = isIcon ? { src: icon } : { src: '' };
    },
    stroke: (isStroke, component) => {
      component.tag('Button').stroke = isStroke
        ? { weight: 3, color: 0xff616161 }
        : {};
    }
  }
};

export const LongTitle = Basic.bind({});
LongTitle.args = {
  title: 'This is a button with a really long title'
};

let orangeStyles = {
  background: {
    color: 0xffffd18c
  },
  icon: {
    color: 0xfffea73d
  },
  text: {
    color: 0xfffea73d,
    fontSize: 30
  },
  radius: 4,
  stroke: { weight: 3, color: 0xfffea73d },
  w: 200,
  h: 50,
  padding: 50,
  unfocus: {
    patch: function() {
      this.smooth = { scale: 1 };
    }
  },
  focus: {
    patch: function() {
      this.smooth = { scale: 1.1 };
    }
  }
};

export const WithTheme = () =>
  class WithTheme extends lng.Component {
    static _template() {
      return {
        Button: {
          type: withStyles(Button, orangeStyles),
          title: 'Button'
        }
      };
    }
  };
