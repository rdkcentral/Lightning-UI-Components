import lng from '@lightningjs/core';

import MetadataSmall from '.';
import mdx from './MetadataSmall.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../Styles/Colors';

export default {
  title: 'Elements / MetadataSmall',
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
          w: 400,
          h: 200,
          title: args.title,
          data: args.data,
          progress: args.progress,
          logo: circle
        }
      };
    }

    _getFocused() {
      return this.tag('MetadataSmall');
    }
  };
Basic.args = {
  title: 'Tile Title',
  data: [
    '94%',
    {
      icon: lightningbolt,
      color: getHexColor('00ff00'),
      title: 'Green Lightning Bolt'
    },
    '86%',
    {
      icon:
        'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
      title: 'Rotten Tomatoes rating'
    }
  ],
  progress: 0
};
Basic.parameters = {
  argActions: {}
};

export const ClippedText = args =>
  class ClippedText extends lng.Component {
    static _template() {
      return {
        MetadataSmall: {
          type: MetadataSmall,
          w: 400,
          title: args.title,
          data: args.data,
          progress: args.progress,
          logo: args.showLogo ? lightningbolt : undefined,
          logoWidth: 1920,
          logoHeight: 1080
        }
      };
    }

    _getFocused() {
      return this.tag('MetadataSmall');
    }
  };
ClippedText.args = {
  title: 'Tile Title',
  // data: ["an example of text that will fade out i swear to god it'll fade out"],
  data:
    'description askdljfh sadf as jfhk asf as lfa sfdj alsk fd kask jldfalks d a sd fa lsdkjf lakjs dfk sdalkf al f',
  progress: 0,
  showLogo: false
};
ClippedText.parameters = {
  argActions: {}
};
