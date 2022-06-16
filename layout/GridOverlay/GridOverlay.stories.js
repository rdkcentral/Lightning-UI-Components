import lng from '@lightningjs/core';
import context from '../../context';
import GridOverlay from '.';
import mdx from './GridOverlay.mdx';

export default {
  title: 'Layout / GridOverlay',
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
        GridOverlay: {
          type: GridOverlay,
          x: context.theme.layout.marginX * -1,
          y: context.theme.layout.marginY * -1,
          showColumns: args.showColumns,
          showMargins: args.showMargins,
          showSafe: args.showSafe,
          showGutters: args.showGutters,
          showText: args.showText,
          alpha: args.alpha
        }
      };
    }

    _getFocused() {
      return this.tag('GridOverlay');
    }
  };
Basic.args = {
  alpha: 1,
  showColumns: true,
  showMargins: true,
  showSafe: true,
  showGutters: true,
  showText: true
};
Basic.argTypes = {
  alpha: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    }
  },
  showColumns: { control: 'boolean' },
  showMargins: { control: 'boolean' },
  showSafe: { control: 'boolean' },
  showGutters: { control: 'boolean' },
  showText: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {}
};
