import lng from 'wpe-lightning';

import Input from '.';
import mdx from './Input.mdx';
import eye from '../../assets/images/ic_eye_white_48.png';
import eyeHide from '../../assets/images/ic_eyeHide_white_48.png';
import { rgba2argb } from '../../utils';

export default {
  title: 'Input',
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
        Input: {
          w: 500,
          type: Input,
          placeholder: args.placeholder,
          password: args.password,
          mask: args.mask,
          icon: args.icon,
          caption: args.caption,
          iconColor: rgba2argb(args.iconColor),
          iconFocusColor: rgba2argb(args.iconFocusColor)
        }
      };
    }

    _handleKey(event) {
      const { key } = event;
      if (key.length === 1) {
        this.tag('Input').insert(key);
      }
      if (key === 'Backspace') {
        this.tag('Input').backspace();
      }
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('Input');
      }
    }
  };

Basic.args = {
  placeholder: 'Type something',
  password: false,
  mask: '•',
  iconColor: 'rgba(98,98,98,1)',
  iconFocusColor: 'rgba(13,13,15,1)',
  caption: 'This is a caption',
  icon: eye
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  listening: { control: 'boolean' },
  password: { control: 'boolean' },
  mask: { control: 'text' },
  hideIcon: { control: 'boolean' },
  iconColor: { control: 'color' },
  iconFocusColor: { control: 'color' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('Input')
        : () => {};
      component._refocus();
    },
    listening: (isListening, component) => {
      component.tag('Input').listening = isListening;
    },
    password: (isPassword, component) => {
      component.tag('Input').password = isPassword;
      component.tag('Input').icon = isPassword ? eyeHide : eye;
    },
    hideIcon: (isHide, component) => {
      const icon = component.tag('Input').password ? eyeHide : eye;
      component.tag('Input').icon = isHide ? null : icon;
    },
    iconColor: (iconColor, component) => {
      component.tag('Input').iconColor = rgba2argb(iconColor);
    },
    iconFocusColor: (iconFocusColor, component) => {
      component.tag('Input').iconFocusColor = rgba2argb(iconFocusColor);
    }
  }
};
