import lng from '@lightningjs/core';
import { default as FocusRingComponent } from './index.js';
import mdx from './FocusRing.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[4]}/FocusRing`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const FocusRing = () =>
  class FocusRing extends lng.Component {
    static _template() {
      return {
        FocusRing: {
          type: FocusRingComponent,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 5
          }
        }
      };
    }
  };

FocusRing.argTypes = {
  startAnimation: {
    defaultValue: true,
    control: 'boolean',
    description: 'When true it animates the FocusRing'
  }
};

FocusRing.parameters = {
  argActions: {
    startAnimation: (start, component) => {
      if (start) {
        component.tag('FocusRing').startAnimation();
      } else {
        component.tag('FocusRing').stopAnimation();
      }
    }
  }
};

FocusRing.storyName = 'FocusRing';
