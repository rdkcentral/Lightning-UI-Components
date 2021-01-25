import lng from 'wpe-lightning';

import MetadataCard from '.';
import mdx from './MetadataCard.mdx';
import logo from '../../assets/images/ic_lightning_white_32.png';

export default {
  title: 'MetadataCard',
  args: {
    logo: true,
    secondLine: true,
    thirdLine: true,
    focused: false,
    maxLines: 1
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
        MetadataCard: {
          type: MetadataCard,
          w: 500,
          firstLine: [
            'First line',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'with marquee scrolling'
          ],
          secondLine: args.secondLine
            ? 'Second line that is very long and will need to be truncated'
            : undefined,
          thirdLine: args.thirdLine
            ? ['Third line with badging', { badge: '4HD' }, { badge: 'DVS' }]
            : undefined,
          logo: args.logo ? logo : undefined,
          logoW: 32
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('MetadataCard');
      }
    }
  };
Basic.args = {};
Basic.argTypes = {
  focused: { control: 'boolean' },
  secondLine: { control: 'boolean' },
  thirdLine: { control: 'boolean' },
  logo: { control: 'boolean' },
  maxLines: { control: { type: 'range', min: 1, max: 2, step: 1 } }
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
        ? 'Second line that is very long and will need to be truncated'
        : undefined;
    },
    thirdLine: (isThirdLine, component) => {
      component.tag('MetadataCard').thirdLine = isThirdLine
        ? ['Third line with badging', { badge: '4HD' }, { badge: 'DVS' }]
        : undefined;
    },
    maxLines: (maxLines, component) => {
      component.tag('MetadataCard').secondLineTextProperties = {
        ...component.tag('MetadataCard').secondLineTextProperties,
        maxLines
      };
    }
  }
};
