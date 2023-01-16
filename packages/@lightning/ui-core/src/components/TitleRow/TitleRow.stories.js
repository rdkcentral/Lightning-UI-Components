import lng from '@lightningjs/core';
import { Row as RowBasic } from '../Row/Row.stories.js';
import { Tile } from '../index.js';
import mdx from './TitleRow.mdx';
import { default as TitleRowComponent } from './index.js';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[64]}/TitleRow`,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    title: 'Row Title',
    ...RowBasic.args
  },
  argTypes: {
    title: {
      description: 'Title text to be displayed above the row',
      defaultValue: 'Row Title',
      control: 'text'
    },
    ...RowBasic.argTypes
  }
};

const createItems = length => {
  return Array.from({ length }).map((_, index) => ({
    type: Tile,
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`
  }));
};

export const TitleRow = () =>
  class TitleRow extends lng.Component {
    static _template() {
      return {
        TitleRow: {
          type: TitleRowComponent,
          items: createItems(12)
        }
      };
    }

    _getFocused() {
      return this.tag('TitleRow');
    }
  };

TitleRow.storyName = 'TitleRow';
