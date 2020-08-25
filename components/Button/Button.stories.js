import lng from 'wpe-lightning';

import Button from '.';
import withStyles from '../../mixins/withStyles';
import mdx from './Button.mdx';
import { action } from '@storybook/addon-actions';
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
          radius: number('Radius', 0, { min: 0, max: 20 }),
          onEnter: action('onEnter')
        }
      };
    }

    _init() {
      if (boolean('Icon', false)) {
        this.tag('Button').icon = { src: icon };
      }
      if (boolean('Stroke', false)) {
        this.tag('Button').stroke = { weight: 3, color: 0xff616161 };
      }
      if (boolean('Fixed', false)) {
        this.tag('Button').fixed = true;
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

let orangeStyles = {
  background: {
    color: 0xffffd18c
  },
  icon: {
    color: 0xfffea73d
  },
  text: {
    color: 0xfffea73d,
    fontSize: 30
  },
  radius: 4,
  stroke: { weight: 3, color: 0xfffea73d },
  w: 200,
  h: 50,
  padding: 50,
  unfocus: {
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
          type: withStyles(Button, orangeStyles),
          title: 'Button'
        }
      };
    }
    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('Button');
      }
    }
  };

export const KeyHandling = () =>
  class KeyHandling extends lng.Component {
    static _template() {
      return {
        Button: {
          type: Button,
          title: 'Button',
          onEnter: button => (button.title = button.title + '!')
        }
      };
    }

    _getFocused() {
      return this.tag('Button');
    }
  };
