import lng from '@lightningjs/core';

import InlineContent from '.';
import mdx from './InlineContent.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import { getHexColor } from '../../Styles/Colors';

export default {
  title: 'Layout / InlineContent',
  args: {
    contentSpacing: 8,
    contentWrap: false,
    justify: 'flex-start',
    contentProperties: { marginBottom: -4 }
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
        InlineContent: {
          type: InlineContent,
          x: 200,
          w: 200,
          contentSpacing: args.contentSpacing,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          content: [
            'Text',
            {
              icon: lightningbolt,
              color: getHexColor('00ff00'),
              title: 'Green Lightning Bolt'
            },
            'Wrapping Text',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'and more text',
            {
              text: 'with some red ',
              style: { textColor: getHexColor('FF6194') }
            },
            'for fun',
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' }
          ]
        },
        InlineContentWithNewLines: {
          type: InlineContent,
          x: 200,
          y: 300,
          w: 400,
          contentSpacing: args.contentSpacing,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          content: [
            'Example with',
            {
              icon: lightningbolt,
              color: getHexColor('00ff00'),
              title: 'Green Lightning Bolt'
            },
            { newline: true },
            'line breaks ({ newline: true})',
            { newline: true },
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'placed throughout',
            { newline: true },
            { badge: 'HD', title: 'HD' },
            { newline: true },
            { badge: 'SD', title: 'SD' }
          ]
        }
      };
    }

    $loadedInlineContent() {
      args.loaded();
    }

    _getFocused() {
      return this.tag('InlineContent');
    }
  };
Basic.argTypes = {
  loaded: { action: 'Inline Content textures loaded' },
  contentSpacing: { control: { type: 'number', min: 0, step: 1 } },
  contentProperties: { control: { type: 'object' } },
  contentWrap: { control: 'boolean' },
  justify: {
    control: {
      type: 'radio',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly'
      ]
    }
  }
};
