import lng from '@lightningjs/core';
import withStyles from '.';
import withTheme from '../withTheme';
import mdx from './withStyles.mdx';
import { rgba2argb } from '../../utils';

export default {
  title: 'Mixins/withStyles',
  parameters: {
    tag: 'Box',
    docs: {
      page: mdx
    }
  }
};

export const Basic = args => {
  const styles = {
    w: args.w,
    h: args.h,
    color: rgba2argb(args.color)
  };

  class Box extends withStyles(
    class extends lng.Component {
      static _template() {
        return {
          w: this.styles.w,
          h: this.styles.h,
          color: this.styles.color,
          rect: true
        };
      }
    },
    styles
  ) {}

  return class extends lng.Component {
    static _template() {
      return {
        Box: {
          type: Box
        }
      };
    }
  };
};
Basic.args = {
  h: 50,
  w: 50,
  color: 'rgba(0,0,255,1)'
};
Basic.argTypes = {
  h: { control: 'number' },
  w: { control: 'number' },
  color: { control: 'color' }
};

export const WithTheme = args => {
  const themes = {
    light: {
      color: 0xffbbbbbb,
      text: {
        color: 0xff333333
      }
    },
    dark: {
      color: 0xff333333,
      text: {
        color: 0xffbbbbbb
      }
    }
  };
  const styles = theme => ({
    color: theme.color,
    textColor: theme.text.color
  });

  class Box extends withStyles(
    class extends lng.Component {
      static _template() {
        return {
          w: 100,
          h: 100,
          color: this.styles.color,
          rect: true
        };
      }
    },
    styles,
    themes[args.theme]
  ) {}

  class Text extends withStyles(
    class extends lng.Component {
      static _template() {
        return {
          text: {
            textColor: this.styles.textColor
          }
        };
      }
    },
    styles,
    themes[args.theme]
  ) {}

  return class extends lng.Component {
    static _template() {
      return {
        Box: {
          type: Box
        },
        Text: {
          type: Text,
          text: {
            text: 'Hi'
          }
        }
      };
    }
  };
};
WithTheme.args = {
  theme: 'light'
};
WithTheme.argTypes = {
  theme: { control: { type: 'select', options: ['light', 'dark'] } }
};
