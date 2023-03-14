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

module.exports = (name) => {

  return `import lng from '@lightningjs/core';

import ${name} from '.';
import mdx from './${name}.mdx';
import { CATEGORIES } from '../../../docs/constants';

export default {
  // TODO: replace categoryIndex with key for which category this component's story should be nested in. See CATEGORIES object in packages/apps/lightning-ui-docs/index.js
  title: 'CATEGORIES[categoryIndex]/${name}',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ${name}: {
          type: ${name}
        }
      };
    }
  };
Basic.args = {
  // argName: undefined
};
Basic.argTypes = {
  // argName: {
  //   control: '',
  //   description: '',
  //   table: {
  //     defaultValue: { summary: undefined }
  //   }
  // }
};
Basic.parameters = {
  argActions: {}
};
`;
};
