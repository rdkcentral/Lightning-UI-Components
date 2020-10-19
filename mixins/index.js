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

import { createTransitions } from '../components/Styles/Transitions';

const patchTransitions = (element, transitions) => {
  if (!element._transitions) {
    element.transitions = transitions;
    return;
  };

  for (let key in transitions) {
    if (!element._transitions[key]) {
      element.transition(key, transitions[key]);
    }
  }
};

const collectChildren = (children, result=[]) => {
  if (children && children.length) {
    result.push(...children);
    return collectChildren(children.flatMap(child => child.children), result);
  }
  return result
}

export const withTransitions = (Base, options = {}) => {
  const transitions = createTransitions(options);

  return class extends Base {
    static get name() { return Base.name }
    static _template() {
      return {
        transitions,
        ...super._template()
      };
    }

    _init() {
      const flatTree = collectChildren(this.children);
      flatTree.forEach(element => patchTransitions(element, transitions));
      super._init();
    }
  };
};
