/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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
import withHandleKey from '.';
import mdx from './withHandleKey.mdx';
export default {
  title: 'Mixins/withHandleKey',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

class ChildComp extends lng.Component {
  static _template() {
    return {
      w: 150,
      h: 40,
      Content: {
        Title: {
          text: {
            text: 'Press an arrow or enter key'
          }
        }
      }
    };
  }
}

const ChildWithHandleKey = withHandleKey(ChildComp);

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Parent: {
          children: [
            {
              Child: {
                type: ChildWithHandleKey,
                onArrowDown: args.onArrowDown,
                onEnter: args.onEnter
              }
            }
          ]
        }
      };
    }

    $onArrowUp(component, keyEvent) {
      args.onArrowUp(component, keyEvent);
    }

    $onArrowRight(component, keyEvent) {
      args.onArrowRight(component, keyEvent);
    }

    $onArrowLeft(component, keyEvent) {
      args.onArrowLeft(component, keyEvent);
    }

    _getFocused() {
      return this.tag('Parent.Child');
    }
  };

Basic.argTypes = {
  onEnter: { action: 'onEnter invoked in child component' },
  onArrowUp: { action: '$onArrowUp invoked in parent component' },
  onArrowDown: { action: 'onArrowDown invoked in child component' },
  onArrowRight: { action: '$onArrowRight invoked in parent component' },
  onArrowLeft: { action: '$onArrowLeft invoked in parent component' }
};
