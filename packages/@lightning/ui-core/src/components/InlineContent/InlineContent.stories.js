import lng from '@lightningjs/core';

import InlineContent from './InlineContent.js';
import mdx from './InlineContent.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import { getHexColor } from '../../utils/index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[256]}/InlineContent`,
  args: {
    contentWrap: false,
    justify: 'center',
    contentProperties: { marginBottom: -4 }
  },
  argTypes: {
    loaded: {
      action: 'Inline Content textures loaded',
      description: 'action fired when $loadedInlineContent has been called'
    },

    contentProperties: {
      control: {
        type: 'object'
      },
      defaultValue: { marginBottom: -4 },
      description: 'object setting flexItem props on all content items',
      type: 'object',
      table: {
        defaultValue: {
          summary: '{ marginBottom: -4 }'
        }
      }
    },
    contentWrap: {
      control: 'boolean',
      defaultValue: false,
      description:
        'determines whether the containing flexbox should wrap the content onto the next line',
      type: 'boolean',
      table: {
        defaultValue: { summary: false }
      }
    },
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
      },
      defaultValue: 'center',
      description: 'alignment of first line flexbox content',
      type: 'string',
      table: {
        defaultValue: { summary: 'center' }
      }
    }
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
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('00ff00')
            }
          },
          content: [
            'Text',
            {
              icon: lightningbolt,
              title: 'Green Lightning Bolt',
              style: { color: getHexColor('00ff00') }
            },
            'Wrapping Text',
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'and more text',
            {
              text: 'with some red ',
              style: { textColor: getHexColor('FF6194') }
            },
            'for fun',
            { badge: 'HD', title: 'HD' },
            { badge: 'SD', title: 'SD' },
            {
              text: 'make some text italic',
              style: 'italic'
            }
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

export const WithNewLines = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContent,
          x: 200,
          w: 400,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          content: [
            'Example with multiple lines',
            {
              icon: lightningbolt,
              style: { color: getHexColor('00ff00') },
              title: 'Green Lightning Bolt'
            },
            { newline: true },
            'this line should break here',
            { newline: true },
            {
              icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
              title: 'Rotten Tomatoes rating'
            },
            'another line break here',
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

export const WithParsing = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        InlineContent: {
          type: InlineContent,
          x: 200,
          w: 400,
          contentWrap: args.contentWrap,
          contentProperties: args.contentProperties,
          justify: args.justify,
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('FF6194')
            }
          },
          content:
            'This is an example of using custom markup {ICON:settings|http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'
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
