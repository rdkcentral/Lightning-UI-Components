import lng from '@lightningjs/core';
import FocusManager from './index.js';
import mdx from './FocusManager.mdx';
import { withSelections } from '../../mixins/index.js';
import { CATEGORIES } from 'lightning-ui-docs';
import Button from '../Button';

export default {
  title: `${CATEGORIES[64]}/FocusManager`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Rows = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: withSelections(FocusManager),
          direction: 'row',
          items: [
            { type: ButtonFixedWidth, title: 'Left' },
            { type: ButtonFixedWidth, title: 'Center', x: 250 },
            { type: ButtonFixedWidth, title: 'Right', x: 500 }
          ]
        }
      };
    }
  };

export const WrapSelected = () =>
  class WrapSelectedExample extends lng.Component {
    static _template() {
      return {
        Row: {
          y: 50,
          type: FocusManager,
          direction: 'row',
          wrapSelected: true, // allows cycling through items
          items: [
            { type: ButtonFixedWidth, title: 'Left' },
            { type: ButtonFixedWidth, title: 'Center', x: 250 },
            { type: ButtonFixedWidth, title: 'Right', x: 500 }
          ]
        },
        Text: {
          y: 0,
          text: {
            fontSize: 20,
            text: 'Key in one direction a bunch of times'
          }
        }
      };
    }
  };

export const Columns = () =>
  class ColumnExample extends lng.Component {
    static _template() {
      return {
        Column: {
          type: FocusManager,
          direction: 'column',
          items: [
            { type: ButtonFixedWidth, title: 'Top' },
            { type: ButtonFixedWidth, title: 'Middle', y: 150 },
            { type: ButtonFixedWidth, title: 'Bottom', y: 300 }
          ]
        }
      };
    }
  };

export const ColumnWithRows = () =>
  class ColumnWithRowsExample extends lng.Component {
    static _template() {
      return {
        Column: Column({
          items: [Row(), Row({ y: 150 }), Row({ y: 300 })]
        })
      };
    }
  };

function Row({ y = 0 } = {}) {
  return {
    type: FocusManager,
    direction: 'row',
    y,
    items: [
      { type: ButtonFixedWidth, title: 'Left' },
      { type: ButtonFixedWidth, title: 'Center', x: 250 },
      { type: ButtonFixedWidth, title: 'Right', x: 500 }
    ]
  };
}

function Column({ items }) {
  return {
    type: FocusManager,
    direction: 'column',
    items
  };
}

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
