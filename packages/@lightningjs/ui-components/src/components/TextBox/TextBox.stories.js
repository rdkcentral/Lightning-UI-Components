import lng from '@lightningjs/core';
import TextBox from './index.js';
import mdx from './TextBox.mdx';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import { getHexColor } from '../../utils/index.js';
import inlineContentStory from '../InlineContent/InlineContent.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[256]}/TextBox`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const { args: inlineContentArgs, argTypes: inlineContentArgTypes } =
  inlineContentStory;

const lorum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          style: { textStyle: { wordWrapWidth: 600, maxLines: 3 } }
        }
      };
    }
  };

Basic.args = {
  content: lorum,
  marquee: false
};

Basic.argTypes = {
  content: {
    control: 'text',
    description: 'Text to be displayed in element',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  marquee: {
    control: 'boolean',
    description:
      "Scrolls text when a single line of text is longer than the textbox's width",
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const WithInlineContentArray = () =>
  class WithInlineContentArray extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          x: 200,
          w: 400,
          content: [
            'Text',
            {
              icon: lightningbolt,
              style: { color: getHexColor('00ff00') },
              title: 'Green Lightning Bolt'
            },
            'Wrapping Text',
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
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
        }
      };
    }
  };

WithInlineContentArray.args = inlineContentArgs;
WithInlineContentArray.argTypes = inlineContentArgTypes;

export const WithInlineContentString = () =>
  class WithInlineContentArray extends lng.Component {
    static _template() {
      return {
        TextBox: {
          type: TextBox,
          w: 400,
          content:
            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',
          customStyleMappings: {
            italic: {
              fontStyle: 'italic',
              textColor: getHexColor('FF6194')
            }
          }
        }
      };
    }
  };

WithInlineContentString.args = inlineContentArgs;
WithInlineContentString.argTypes = inlineContentArgTypes;
