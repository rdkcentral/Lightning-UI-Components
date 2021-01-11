import lng from 'wpe-lightning';

import withMetadata from '.';
import mdx from './withMetadata.mdx';
import TileIcon from '../../components/TileIcon';
import Row from '../../components/Row';
import MetadataCard from '../../components/MetadataCard';
import MetadataTile from '../../components/MetadataTile';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import TileCircle from '../../components/TileCircle';

export default {
  title: 'Mixins/withMetadata',
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
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              type: withMetadata(TileIcon),
              w: 320,
              h: 180,
              icon: lightningbolt,
              iconW: 50,
              iconH: 50,
              persistentMetadata: true,
              Metadata: {
                type: MetadataCard,
                firstLine: 'MetadataCard (with long marquee title)',
                secondLine: 'Is always visible',
                thirdLine: '(for focus and unfocus)',
                logo: lightningbolt,
                logoW: 32
              }
            },
            {
              type: withMetadata(),
              w: 320,
              h: 180,
              Metadata: {
                type: MetadataTile,
                firstLine: 'MetadataTile (with long marquee title)',
                secondLine: 'is visible on focus'
              }
            },
            {
              type: withMetadata(TileCircle),
              w: 320,
              h: 180,
              src:
            'https://edge.myriad-gn.top.comcast.net/select/image?entityId=5299164605973043111&default=true&width=320&ratio=3x4&rule=keyArt&quality=100',
              Metadata: {
                type: MetadataTile,
                firstLine: 'Personality entity',
                secondLine: 'with cropped 3x4'
              }
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
