import lng from '@lightningjs/core';
import { default as SurfaceComponent } from './index.js';
import mdx from './Surface.mdx';
import { createModeControl } from '../../../storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/Surface`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Surface = () =>
  class Surface extends lng.Component {
    static _template() {
      return {
        Surface: {
          type: SurfaceComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Surface.argTypes = createModeControl();
