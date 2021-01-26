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
export default function withSelections(Base, options = {}) {
  const defaultOpts = {
    captureKey: 'Enter',
    defaultIndex: 0,
    eventName: 'onSelect',
    keys: {
      currentSelected: 'currentSelected',
      currentSelectedIndex: 'currentSelectedIndex',
      isSelected: 'isSelected',
      items: 'items',
      setSelected: 'setSelected',
    },
  };
  const {
    captureKey,
    defaultIndex,
    eventName,
    keys: {
      currentSelected,
      currentSelectedIndex,
      isSelected,
      items,
      setSelected
    }
  } = {
    ...defaultOpts,
    ...options,
    keys: {
      ...defaultOpts.keys,
      ...options.keys
    }
  };

  return class extends Base {
    static get name() { return Base.name }

    _construct() {
      super._construct();
      this[currentSelectedIndex] = defaultIndex
    }

    _init() {
      super._init();
      this[currentSelected][isSelected] = true;
    }

    [setSelected](selected, val) {
      const prevSelected = (this[items] || [])[this[currentSelectedIndex]];

      if (selected && (selected !== prevSelected || selected[isSelected] !== val)) {
        prevSelected && (prevSelected[isSelected] = false);
        selected[isSelected] = val;
        this[currentSelectedIndex] = Array.from(this[items] || []).indexOf(selected);
        this.fireAncestors('$' + eventName, selected, val);
      }
    }

    _captureKey(event) {
      if (
        (Array.isArray(captureKey) && captureKey.indexOf(event.key) > -1)
        || event.key === captureKey
      ) {
        const [selected] = this.stage.application.focusPath.slice(-1);
        this[setSelected](selected, true);
      }
      return false
    }

    ['$' + setSelected](selected, val) {
      this[setSelected](selected, val);
    }

    get [currentSelected]() {
      return this[items][this[currentSelectedIndex]];
    }
  }
}
