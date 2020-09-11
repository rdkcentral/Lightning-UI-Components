import lng from 'wpe-lightning';
import icon from '../../assets/images/ic_lightning_white_32.png';
import Pivot from '.';

import mdx from './Pivot.mdx';

export default {
  title: 'Pivot',
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
        Pivot: {
          type: Pivot,
          title: args.title,
          backgroundType: args.backgroundType,
          onEnter: args.onEnter,
          icon: args.icon ? icon : null
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Pivot');
      }
    }
  };
Basic.args = {
  title: 'Dynamic Pivot',
  backgroundType: 'stroke'
};
Basic.argTypes = {
  onEnter: { action: 'onEnter' },
  focused: { control: 'boolean' },
  icon: { control: 'boolean' },
  title: { control: 'text' },
  backgroundType: {
    control: {
      type: 'radio',
      options: ['stroke', 'fill', 'float', 'ghost']
    }
  }
};
Basic.parameters = {
  argActions: {
    icon: (isIcon, component) =>
      (component.tag('Pivot').icon = isIcon ? icon : null),
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Pivot')
        : () => {};
      component._refocus();
    }
  }
};

export const Loading = () =>
  class Loading extends lng.Component {
    static _template() {
      return {
        Pivot: {
          type: Pivot,
          backgroundType: 'fill'
        }
      };
    }
  };
