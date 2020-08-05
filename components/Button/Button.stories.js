import lng from 'wpe-lightning';

import Button from '.';
import mdx from './Button.mdx';
import { boolean, number, withKnobs, text } from '@storybook/addon-knobs';
import icon from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
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
        Button: {
          type: Button,
          title: text('Title', 'Button'),
          radius: number('Radius', 0, { min: 0, max: 20 })
        }
      };
    }

    _init() {
      if (boolean('Icon', false)) {
        this.tag('Button').icon = { src: icon };
      }
      if (boolean('Stroke', false)) {
        this.tag('Button').stroke = { weight: 3, color: 0xff0000ff };
      }
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('Button');
      }
    }
  };

export const LongTitle = () =>
  class LongTitle extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          title: 'This is a button with a really long title'
        }
      };
    }
    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('Button');
      }
    }
  };

let orangeTheme = {
  radius: 4,
  stroke: { weight: 3, color: 0xfffea73d },
  text: { fontSize: 30 },
  w: 200,
  h: 50,
  padding: 50,
  unfocus: {
    background: 0xffffd18c,
    text: 0xfffea73d,
    icon: 0xfffea73d,
    patch: function() {
      this.smooth = { scale: 1 };
    }
  },
  focus: {
    patch: function() {
      this.smooth = { scale: 1.1 };
    }
  }
};

export const WithTheme = () =>
  class WithTheme extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          title: 'Button',
          theme: orangeTheme
        }
      };
    }
    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('Button');
      }
    }
  };
