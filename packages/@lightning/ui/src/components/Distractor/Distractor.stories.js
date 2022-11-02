import lng from '@lightningjs/core';
import { default as DistractorComponent } from './index.js';
import mdx from './Distractor.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Distractor`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Distractor = () =>
  class Distractor extends lng.Component {
    static _template() {
      return {
        Distractor: {
          type: DistractorComponent
        }
      };
    }
  };
Distractor.args = {};
Distractor.argTypes = {};
Distractor.parameters = {
  argActions: {}
};
