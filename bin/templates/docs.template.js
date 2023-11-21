{/* prettier-ignore */}
{
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
}

const urlBase =
  'https://github.com/rdkcentral/Lightning-UI-Components/tree/develop/packages/%40lightningjs/ui-components/src/components/';

module.exports = (name, parentName) => `{/* prettier-ignore */}
{/*Copyright 2023 Comcast Cable Communications Management, LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
SPDX-License-Identifier: Apache-2.0 */}

import { Meta, Title, ArgTypes, Description } from '@storybook/blocks';
import * as ${name}Stories from './${name}.stories';
import * as ${parentName}Stories from '../${parentName}/${parentName}.stories'; //TODO: Make sure the path is correct

<Meta of={${name}Stories} />

<Title /> 

<Description />  

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

## API

### Parent Properties

//TODO: If you added a parent props table check the appropriate props pulled otherwise delete this section. 
//Also check the name of the story of the parent component matches the name here.
<ArgTypes of={${parentName}Stories.${parentName}} />

### Properties
// TODO: if you change the name of the story from Basic to something else, also update then name here 
<ArgTypes of={${name}Stories.Basic} />

### Style Properties

| name  | type   | description |
| ----- | ------ | ----------- |
|       |        |             |

### Methods

`;
