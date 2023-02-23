import lng from '@lightningjs/core';

import { default as LabelComponent } from './index.js';
import mdx from './Label.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/Label`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Label = () =>
  class Label extends lng.Component {
    static _template() {
      return {
        Label: {
          type: LabelComponent
        }
      };
    }
  };
Label.args = {
  title: 'Label'
};
Label.argTypes = {
  title: {
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
