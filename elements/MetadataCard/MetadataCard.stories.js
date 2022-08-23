import lng from '@lightningjs/core';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../utils';

import MetadataCard from '.';
import mdx from './MetadataCard.mdx';
import logo from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'Elements / MetadataCard',
  args: {
    logo: true,
    secondLine: true,
    thirdLine: true,
    focused: false
  },
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
        MetadataCard: {
          type: MetadataCard
        }
      };
    }
  };
Basic.args = {};
Basic.argTypes = {
  focused: { control: 'boolean' },
  secondLine: { control: 'boolean' },
  thirdLine: { control: 'boolean' },
  logo: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('MetadataCard')
        : () => {};
      component._refocus();
    },
    logo: (isLogo, component) => {
      component.tag('MetadataCard').logo = isLogo ? logo : undefined;
    },
    secondLine: (isSecondLine, component) => {
      component.tag('MetadataCard').secondLine = isSecondLine
        ? [
            'Second line',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'that is very long and will truncate'
          ]
        : undefined;
    },
    thirdLine: (isThirdLine, component) => {
      component.tag('MetadataCard').thirdLine = isThirdLine
        ? ['Third line with badging', { badge: '4HD' }, { badge: 'DVS' }]
        : undefined;
    }
  }
};
