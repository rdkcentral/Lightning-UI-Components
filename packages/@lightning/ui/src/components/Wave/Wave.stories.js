import lng from '@lightningjs/core';
import { default as WaveComponent } from './index.js';
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

export const Wave = () =>
  class Wave extends lng.Component {
    static _template() {
      return {
        Wave: {
          type: WaveComponent
        }
      };
    }
  };

Wave.args = {
  'toggle animation': true
};

Wave.argTypes = {
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

Wave.parameters = {
  argActions: {
    'toggle animation': (shouldAnimate, component) => {
      shouldAnimate
        ? component.tag('Wave').startAnimation()
        : component.tag('Wave').stopAnimation();
      component._refocus();
    }
  }
};
