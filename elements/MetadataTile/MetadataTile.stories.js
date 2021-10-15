import lng from '@lightningjs/core';

import MetadataTile from '.';
import mdx from './MetadataTile.mdx';

export default {
  title: 'Elements / MetadataTile',
  args: {
    focused: false
  },
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
        MetadataTile: {
          type: MetadataTile,
          w: 500,
          firstLine:
            'First line with marquee scrolling text that will truncate then scroll',
          secondLine: [
            'Free',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            '75%',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=6830964634263316239&width=32&height=&ratio=1x1&trim=false',
              title: 'Audience rating'
            },
            '80%',
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' }
          ]
        }
      };
    }

    _getFocused() {
      return args.focused && this.tag('MetadataTile');
    }
  };
Basic.args = {};
Basic.argTypes = {
  focused: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('MetadataTile')
        : () => {};
      component._refocus();
    }
  }
};
