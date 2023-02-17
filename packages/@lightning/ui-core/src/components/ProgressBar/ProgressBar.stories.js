import lng from '@lightningjs/core';
import { default as ProgressBarComponent } from './index.js';
import mdx from './ProgressBar.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/ProgressBar`,
  parameters: {
    tag: 'ProgressBar',
    docs: {
      page: mdx
    },
    actions: {
      handles: ['mouseover', 'click .btn']
    }
  }
};

export const ProgressBar = () =>
  class ProgressBar extends lng.Component {
    static _template() {
      return {
        ProgressBar: {
          type: ProgressBarComponent
        }
      };
    }
  };
ProgressBar.storyName = 'ProgressBar';
ProgressBar.args = {
  progress: 0.5,
  w: 410
};
ProgressBar.argTypes = {
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Percentage of the current progress from 0 to 1',
    table: { defaultValue: { summary: 0 } }
  },
  w: {
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the entire bar',
    table: { defaultValue: { summary: 0 } }
  }
};
