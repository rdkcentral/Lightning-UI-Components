import lng from '@lightningjs/core';

import withMetadata from '.';
import mdx from './withMetadata.mdx';
import { Row } from '../../layout';
import {
  MetadataCard,
  MetadataTile,
  TileIcon,
  TileCircle
} from '../../elements';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

export default {
  title: 'Patterns/withMetadata',
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
        TileWithMetadata: {
          type: withMetadata(TileIcon),
          w: 560,
          h: 320,
          persistentMetadata: args.persistentMetadata,
          progress: args.progress,
          badge: args.badge,
          Metadata: {
            type:
              args.metadataType === 'MetadataTile'
                ? MetadataTile
                : MetadataCard,
            firstLine: `${args.metadataType} with a long title to show marquee scroll`,
            secondLine: [
              'and positioned under the tile',
              { badge: 'HD' },
              { badge: 'SD' }
            ],
            logo: lightningbolt,
            logoW: 32
          }
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TileWithMetadata');
      }
    }
  };
Basic.args = {
  focused: true,
  persistentMetadata: true,
  metadataType: 'MetadataCard',
  badge: 'Live',
  progress: 0.5
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  persistentMetadata: { control: 'boolean' },
  metadataType: {
    control: { type: 'radio', options: ['MetadataCard', 'MetadataTile'] }
  },
  badge: { control: 'text' },
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    }
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TileWithMetadata')
        : () => {};
      component._refocus();
    }
  }
};

export const XfinityTheme = () =>
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
              type: withMetadata(),
              src: pets,
              w: 320,
              h: 180,
              Metadata: {
                type: MetadataTile,
                firstLine: 'MetadataTile (with long marquee title)',
                secondLine: 'is visible on focus and should truncate'
              }
            },
            {
              type: withMetadata(TileIcon),
              w: 320,
              h: 180,
              icon: lightningbolt,
              iconW: 50,
              iconH: 50,
              persistentMetadata: true,
              progress: 0.5,
              badge: 'HD',
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
