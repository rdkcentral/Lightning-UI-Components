import lng from 'wpe-lightning';

import InlineContent from '.';
import mdx from './InlineContent.mdx';

export default {
  title: 'InlineContent',
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
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'Wrapping Text',
            {
              icon:
                'http://myriad.merlin.comcast.com/select/logo?entityId=6830964634263316239&width=32&height=&ratio=1x1&trim=false',
              title: 'Audience rating'
            },
            'and more text for fun',
            { badge: 'HD', title: 'HD' },
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
