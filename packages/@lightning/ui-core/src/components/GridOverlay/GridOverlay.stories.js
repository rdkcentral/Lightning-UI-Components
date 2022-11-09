import lng from '@lightningjs/core';
import { context } from '../../globals/index.js';
import { default as GridOverlayComponent } from './index.js';
import mdx from './GridOverlay.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/GridOverlay`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const GridOverlay = args =>
  class GridOverlay extends lng.Component {
    static _template() {
      return {
        GridOverlay: {
          type: GridOverlayComponent,
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
GridOverlay.storyName = 'GridOverlay';
GridOverlay.args = {
  alpha: 1,
  showColumns: true,
  showMargins: true,
  showSafe: true,
  showGutters: true,
  showText: true
};
GridOverlay.argTypes = {
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
GridOverlay.parameters = {
  argActions: {}
};
