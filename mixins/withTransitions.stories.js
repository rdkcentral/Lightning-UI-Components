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
import { createTransitions } from '../components/Styles/Transitions';
import { withTransitions } from '.';
import mdx from './withTransitions.mdx';

export default {
  title: 'Mixins/withTransitions',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

class BasicExample extends lng.Component {
  static _template() {
    return {
      Text: {
        text: { text: 'Hit enter' }
      },
      Box: {
        rect: true,
        w: 50,
        h: 50,
        y: 50,
        color: 0xff000000,
        TopText: {
          alpha: 0,
          scale: 0.5,
          x: -100,
          y: -50,
          text: { text: 'Top text' }
        },
        BottomText: {
          alpha: 0,
          scale: 0.5,
          x: 50,
          y: 100,
          text: { text: 'Bottom text' }
        }
      }
    };
  }

  _handleEnter() {
    const on = !this.switch;

    if (on) {
      this.tag('Box').smooth = { w: 250, h: 250, color: 0x480fff00 };
      this.tag('Box').tag('TopText').smooth = {
        alpha: 1,
        scale: 1,
        x: 10,
        y: 0
      };
      this.tag('Box').tag('BottomText').smooth = {
        alpha: 1,
        scale: 1,
        x: 10,
        y: 50
      };
    } else {
      this.tag('Box').smooth = { w: 50, h: 50, color: 0xff000000 };
      this.tag('Box').tag('TopText').smooth = {
        alpha: 0,
        scale: 0,
        x: -100,
        y: -50
      };
      this.tag('Box').tag('BottomText').smooth = {
        alpha: 0,
        scale: 0,
        x: 50,
        y: 100
      };
    }
    this.switch = on;
  }
}

export const Basic = () => withTransitions(BasicExample);

class CustomizationExample extends BasicExample {
  static _template() {
    const template = super._template();
    const { Box } = template;
    const { BottomText } = Box;
    return {
      ...template,
      Box: {
        ...Box,
        BottomText: {
          ...BottomText,
          transitions: createTransitions({
            transition: {
              delay: 0.3
            }
          })
        }
      }
    };
  }

  _handleEnter() {
    const addDelay = createTransitions({
      transition: { delay: 0.3 }
    });
    const removeDelay = createTransitions({
      transition: { delay: 0 }
    });
    const [Box, BottomText] = ['Box', 'BottomText'].map(this.tag, this);

    if (this.switch) {
      Box.transitions = addDelay;
      BottomText.transitions = removeDelay;
    } else {
      Box.transitions = removeDelay;
      BottomText.transitions = addDelay;
    }

    super._handleEnter();
  }
}

export const Customization = () => withTransitions(CustomizationExample);
