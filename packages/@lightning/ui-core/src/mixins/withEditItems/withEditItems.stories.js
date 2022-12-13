import lng from '@lightningjs/core';

import { Button, TextBox, Row } from '../../components/index.js';
import mdx from './withEditItems.mdx';
import { default as withEditItemsMixin } from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';
/**
 * Shared Args and Arg Types from Row
 */
import * as RowProps from '../../components/Row/Row.stories.js';
export default {
  title: `${CATEGORIES[512]}/withEditItems`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withEditItems = () =>
  class withEditItems extends lng.Component {
    static _template() {
      return {
        RowComponent: {
          type: withEditItemsMixin(Row),
          y: 300,
          items: Array.apply(null, { length: 6 }).map((_, i) => ({
            type: Button,
            title: `Button ${i + 1}`,
            w: 150
          }))
        },
        TextBox: {
          type: TextBox,
          content:
            'Press enter to toggle edit mode. \nWhen in edit mode, use left/right arrows to move items \nPress enter again to exit edit mode'
        }
      };
    }

    _handleEnter() {
      this.tag('RowComponent').toggleEdit();
    }
  };
withEditItems.args = RowProps.Row.args;
withEditItems.argTypes = RowProps.Row.argTypes;

withEditItems.storyName = 'withEditItems';
