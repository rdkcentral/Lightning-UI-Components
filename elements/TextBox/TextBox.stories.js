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

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

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
    defaultValue: lorum,
    description: 'Text to be displayed in element',
    type: 'string',
    table: {
      defaultValue: { summary: '' }
    }
  },
  textAlign: {
    control: {
      type: 'select',
      options: ['left', 'center', 'right']
    },
    defaultValue: 'left',
    description: 'the horizontal alignment of TextBox content',
    type: 'string',
    table: {
      defaultValue: { summary: 'left' }
    }
  },
  textColor: {
    control: 'color',
    defaultValue: '#ffffff',
    description: 'Desired color of rendered text.',
    type: 'string',
    table: {
      defaultValue: { summary: '#ffffff' }
    }
  },
  textStyle: {
    control: {
      type: 'select',
      options: Object.keys(TYPOGRAPHY)
    },
    defaultValue: 'body1',
    description:
      'Style of text to be displayed. This value will take precedent over the `textStyle` style property. Avalilable values display1, display2, headline1, headline2, headline3, body1, body2, body3, button1, button2, callout1, caption. Alternatively an object can be passed in containing any [properties that the Lightning text texture supports](https://lightningjs.io/docs/#/lightning-core-reference/RenderEngine/Textures/Text?id=properties).',
    type: 'string',
    table: {
      defaultValue: { summary: 'body1' }
    }
  },
  maxLines: {
    control: {
      type: 'number',
      min: 0,
      max: 100
    },
    defaultValue: 3,
    description: 'Maximum number of lines to display before truncation',
    type: 'string',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  maxLinesSuffix: {
    control: {
      type: 'text'
    },
    defaultValue: '...',
    description:
      'string to be displayed at the end of the line when truncation is used',
    type: 'string',
    table: {
      defaultValue: { summary: '...' }
    }
  },
  verticalAlign: {
    control: {
      type: 'select',
      options: ['top', 'middle', 'bottom']
    },
    defaultValue: 'middle',
    description: 'The vertical alignment of TextBox content.',
    type: 'string',
    table: {
      defaultValue: { summary: 'middle' }
    }
  },
  wordWrap: {
    control: 'boolean',
    defaultValue: true,
    description:
      'Allows long sentences to be broken into new lines when the width of TextBox content exceeds the wordWrapWidth',
    type: 'boolean',
    table: {
      defaultValue: { summary: true }
    }
  },
  wordWrapWidth: {
    control: {
      type: 'number',
      min: 0,
      max: 2000
    },
    defaultValue: 600,
    description: 'Width set to start wrapping to next line',
    type: 'number',
    table: {
      defaultValue: { summary: 0 }
    }
  }
};
