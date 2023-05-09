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

const urlBase = 'https://github.com/rdkcentral/Lightning-UI-Components/tree/develop/packages/%40lightningjs/ui-components/src/components/';

module.exports = (name, dir) => `
import { Canvas, Story } from '@storybook/addon-docs';
import ${name} from '.';

# ${name}

## Source

${urlBase}${name}/${name}.js

## Usage

\`\`\`js
import { ${name} } from '@lightningjs/ui-components';

class Basic extends lng.Component {
  static _template() {
    return {
      ${name}: {
        type: ${name},
      }
    };
  }
};
\`\`\`

<Canvas>
  <Story id="${dir}-${name.toLowerCase()}--basic" />
</Canvas>

## API

### Properties

| name  | type   | required | default | description |
| ----- | ------ | -------- | ------- | ----------- |
|       |        |          |         |             |

### Style Properties

| name  | type   | description |
| ----- | ------ | ----------- |
|       |        |             |

### Methods

`;
