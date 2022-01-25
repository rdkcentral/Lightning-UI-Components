import lng from '@lightningjs/core';

import MetadataSmall from '.';
import mdx from './MetadataSmall.mdx';
import logo from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Elements / MetadataSmall',
  args: {
    logo: true,
    secondLine: true,
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
        MetadataSmall: {
          type: MetadataSmall,
          w: 500,
          firstLine:
            'First line with long text that will wrap and then eventually truncate',
          secondLine: args.secondLine
            ? [
                'Second line',
                {
                  icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                  title: 'Rotten Tomatoes rating'
                },
                'that is very long and will truncate'
              ]
            : undefined,
          logo: args.logo ? logo : undefined,
          logoW: 32
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('MetadataSmall');
      }
    }
  };
Basic.args = {};
Basic.argTypes = {
  focused: { control: 'boolean' },
  secondLine: { control: 'boolean' },
  logo: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('MetadataSmall')
        : () => {};
      component._refocus();
    },
    logo: (isLogo, component) => {
      component.tag('MetadataSmall').logo = isLogo ? logo : undefined;
    },
    secondLine: (isSecondLine, component) => {
      component.tag('MetadataSmall').secondLine = isSecondLine
        ? [
            'Second line',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'that is very long and will truncate'
          ]
        : undefined;
    }
  }
};
