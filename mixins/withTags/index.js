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
function getPropertyDescriptor(path) {
  return {
    get() {
      return this.tag(path);
    },
    configurable: true,
    enumerable: true
  };
}

export default function withTags(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _construct() {
      const tags = this.constructor.tags || [];
      let name, path;
      tags.forEach(tag => {
        if (typeof tag === 'object') {
          ({ name, path } = tag);
        } else {
          name = tag;
          path = tag;
        }
        const key = '_' + name;
        const descriptor = getPropertyDescriptor(path);
        Object.defineProperty(Object.getPrototypeOf(this), key, descriptor);
      });

      super._construct && super._construct();
    }
  };
}
