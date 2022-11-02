import lng from '@lightningjs/core';

import { Button, TextBox, Row } from '../../components/index.js';
import mdx from './withEditItems.mdx';
import { default as withEditItemsMixin } from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

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
        TextBox: {
          y: 0,
          type: TextBox,
          content:
            'Press enter to toggle edit mode. \nWhen in edit mode, use left/right arrows to move items \nPress enter again to exit edit mode'
        },
        RowComponent: {
          type: withEditItemsMixin(Row),
          w: 1920 - 160, // x offset from preview.js * 2
          itemSpacing: 24,
          y: 300,
          alwaysScroll: false,
          neverScroll: true,
          items: Array.apply(null, { length: 6 }).map((_, i) => ({
            type: Button,
            title: `Button ${i + 1}`,
            w: 150
          }))
        }
      };
    }
    _handleEnter() {
      this.tag('RowComponent').toggleEdit();
    }
    _getFocused() {
      return this.tag('RowComponent');
    }
  };
