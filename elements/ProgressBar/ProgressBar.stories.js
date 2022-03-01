import lng from '@lightningjs/core';
import ProgressBar from '.';
import mdx from './ProgressBar.mdx';

export default {
  title: 'Elements / ProgressBar',
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

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ProgressBar: {
          type: ProgressBar
        }
      };
    }

    _getFocused() {
      return this.tag('ProgressBar');
    }
  };

Basic.argTypes = {
  progress: {
    defaultValue: 0.5,
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'percentage of the current progress from 0 to 1',
    table: { defaultValue: { summary: 0 } }
  },
  w: {
    defaultValue: 410,
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the entire bar'
  }
};
