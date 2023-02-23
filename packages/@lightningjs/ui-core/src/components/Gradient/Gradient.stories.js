import lng from '@lightningjs/core';
import { default as GradientComponent } from './index.js';
import mdx from './Gradient.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/Gradient`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Gradient = () =>
  class Gradient extends lng.Component {
    static _template() {
      return {
        Gradient: {
          type: GradientComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Gradient.args = {};
Gradient.argTypes = {};
Gradient.parameters = {
  argActions: {}
};
