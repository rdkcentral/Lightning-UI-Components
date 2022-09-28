import lng from '@lightningjs/core';
import Tile from '../../elements/Tile';
import { Basic as RowBasic } from '../Row/Row.stories';
import TitleRow from '.';
import mdx from './TitleRow.mdx';

export default {
  title: 'Layout / TitleRow',
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
      description: 'title text to be displayed above the row',
      defaultValue: 'Row Title',
      control: 'text'
    },
    ...RowBasic.argTypes
  }
};

const createItems = length => {
  return Array.from({ length }).map(() => ({
    type: Tile,
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }
  }));
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TitleRow: {
          type: TitleRow,
          items: createItems(12)
        }
      };
    }

    _getFocused() {
      return this.tag('TitleRow');
    }
  };
