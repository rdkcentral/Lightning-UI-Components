import lng from 'wpe-lightning';

import MyComponent from '.';
import mdx from './MyComponent.mdx';

export default {
  title: 'MyComponent',
  component: MyComponent,
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
        MyComponent: {
          type: MyComponent
        }
      };
    }

    _getFocused() {
      return this.tag('MyComponent');
    }
  };
