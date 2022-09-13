import lng from '@lightningjs/core';

import { Row } from '../../layout';
import { Button, TextBox } from '../../elements';
import mdx from './withEditItems.mdx';
import withEditItems from './index';
export default {
  title: 'mixins/withEditItems',
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
        TextBox: {
          y: 0,
          type: TextBox,
          content:
            'Press enter to toggle edit mode. \nWhen in edit mode, use left/right arrows to move items \nPress enter again to exit edit mode'
        },
        RowComponent: {
          type: withEditItems(Row),
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
