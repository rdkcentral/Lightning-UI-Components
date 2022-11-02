import lng from '@lightningjs/core';
import Wave from '.';
import mdx from './Wave.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Wave`,
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
        Wave: {
          type: Wave
        }
      };
    }
  };

Basic.args = {
  'toggle animation': true
};

Basic.argTypes = {
  'toggle animation': {
    defaultValue: true,
    control: {
      type: 'boolean'
    },
    description:
      'utilize the startAnimation() and stopAnimation() methods to toggle state',
    table: { defaultValue: { summary: false } }
  }
};

Basic.parameters = {
  argActions: {
    'toggle animation': (shouldAnimate, component) => {
      shouldAnimate
        ? component.tag('Wave').startAnimation()
        : component.tag('Wave').stopAnimation();
      component._refocus();
    }
  }
};
