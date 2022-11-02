module.exports = (name, type) => {
  const upperCaseType = type.charAt(0).toUpperCase() + type.slice(1);

  return `import lng from '@lightningjs/core';

import ${name} from '.';
import mdx from './${name}.mdx';

export default {
  title: '${upperCaseType} / ${name}',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ${name}: {
          type: ${name}
        }
      };
    }

    _getFocused() {
      return this.tag('${name}');
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
