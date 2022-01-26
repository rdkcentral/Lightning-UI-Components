import lng from '@lightningjs/core';
import FocusRing from '.';
import mdx from './FocusRing.mdx';
import parksAndRec from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import withFocusRing from '../../patterns/withFocusRing';
import Base from '../../Base';
import withStyles from '../../mixins/withThemeStyles';

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

class FocusRingWithImage extends lng.Component {
  static _template() {
    return {
      FocusRing: {
        type: class extends withFocusRing(
          withStyles(Base, { focusRing: true })
        ) {
          static __componentName() {
            return 'ImageTile';
          }

          static _template() {
            return {
              src: parksAndRec,
              itemLayout: {
                ratioX: 16,
                ratioY: 9,
                upCount: 5
              }
            };
          }
        }
      }
    };
  }

  _getFocused() {
    return this.tag('FocusRing');
  }
}

export const WithImage = () => withFocusRing(FocusRingWithImage);
