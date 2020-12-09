import lng from 'wpe-lightning';

import withMetadata from '.';
import mdx from './withMetadata.mdx';
import TileIcon from '../../components/TileIcon';
import Row from '../../components/Row';
import MetadataCard from '../../components/MetadataCard';
import MetadataTile from '../../components/MetadataTile';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

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
