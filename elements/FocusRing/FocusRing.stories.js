import lng from '@lightningjs/core';
import FocusRing from '.';
import mdx from './FocusRing.mdx';

export default {
  title: 'Elements / FocusRing',
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
        FocusRing: {
          type: FocusRing,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 5
          }
        }
      };
    }
  };

Basic.argTypes = {
  startAnimation: { defaultValue: false, control: 'boolean' }
};

Basic.parameters = {
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
