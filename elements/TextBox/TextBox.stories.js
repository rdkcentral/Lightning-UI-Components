import lng from '@lightningjs/core';
import TextBox from '.';
import mdx from './TextBox.mdx';
import { TYPOGRAPHY } from '../../Styles';

export default {
  title: 'Elements / TextBox',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => {
  class Base extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox
        }
      };
    }

    $itemChanged(payload) {} // eslint-disable-line no-unused-vars
  }

  return Base;
};

Base.argTypes = {
  content: {
    control: 'text',
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.'
  },
  textStyle: {
    control: {
      type: 'select',
      options: Object.keys(TYPOGRAPHY)
    },
    defaultValue: 'body1'
  },
  textColor: {
    control: 'color',
    defaultValue: '#ffffff'
  },
  textAlign: {
    control: {
      type: 'select',
      options: ['left', 'center', 'right']
    },
    defaultValue: 'left'
  },
  wordWrap: {
    control: 'boolean',
    defaultValue: true
  },
  verticalAlign: {
    control: {
      type: 'select',
      options: ['top', 'middle', 'bottom']
    },
    defaultValue: 'middle'
  },

  maxLines: {
    control: {
      type: 'number',
      min: 0,
      max: 100
    },
    defaultValue: 3
  },

  wordWrapWidth: {
    control: {
      type: 'number',
      min: 0,
      max: 2000
    },
    defaultValue: 600
  },
  maxLinesSuffix: {
    control: {
      type: 'text'
    },
    defaultValue: null
  }
};
