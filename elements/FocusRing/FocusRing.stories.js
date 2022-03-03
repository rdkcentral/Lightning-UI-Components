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
        x: 60,
        y: 60,
        w: 320,
        h: 180,
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
    get _FocusRing() {
      return this.tag('FocusRing');
    }
  };

Basic.args = {
  focused: true
};

Basic.argTypes = {
  focused: { control: 'boolean' }
};

Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('FocusRing')
        : () => {};
      component._refocus();
    }
  }
};
