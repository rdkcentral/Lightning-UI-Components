module.exports = (name) => {

  return `import lng from '@lightningjs/core';

import ${name} from '.';
import mdx from './${name}.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

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
  //   defaultValue: undefined,
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
