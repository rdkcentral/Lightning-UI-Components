import lng from '@lightningjs/core';
import NavigationManager from '.';
import mdx from './NavigationManager.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import Button from '../Button';

class ButtonFixedWidth extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  _init() {
    this.fixed = true;
    this.w = 200;
    super._init();
  }
}

function createRow(props = {}) {
  return {
    type: NavigationManager,
    direction: 'row',
    items: [
      { type: ButtonFixedWidth, title: 'Left' },
      { type: ButtonFixedWidth, title: 'Center', x: 250 },
      { type: ButtonFixedWidth, title: 'Right', x: 500 }
    ],
    ...props
  };
}

export default {
  title: `${CATEGORIES[64]}/NavigationManager`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Row = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: createRow()
      };
    }
  };

export const Column = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: NavigationManager,
          direction: 'column',
          items: [
            { type: ButtonFixedWidth, title: 'Top' },
            { type: ButtonFixedWidth, title: 'Center' },
            { type: ButtonFixedWidth, title: 'Bottom' }
          ]
        }
      };
    }
  };

export const ColumnOfRows = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: NavigationManager,
          direction: 'column',
          plinko: true,
          items: [
            createRow({ autoResizeHeight: true }),
            createRow({ autoResizeHeight: true }),
            createRow({ autoResizeHeight: true })
          ]
        }
      };
    }
  };
