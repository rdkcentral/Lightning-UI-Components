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

module.exports = name => {
  return `import Base from '../Base';

import * as styles from './${name}.styles.js';

export default class ${name} extends Base {
  static get __componentName() {
    return '${name}';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {};
  }

  static get properties() {
    // See documentation on withUpdates mixin
    return [];
  }

  static get tags() {
    /**
     * See documentation on withTags mixin
     */
    return [];
  }

  _update() {
    /**
     * All Logic to update component should go here.
     * Styles can be accessed by this.style.myStyle
     */
  }
}`;
};
  
