import lng from 'wpe-lightning';

import Announcer from '.';
import Column from '../Column';
import Row from '../Row';
import Pivot from '../Pivot';
import mdx from './Announcer.mdx';

export default {
  title: 'Announcer',
  component: Announcer,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const rows = [
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Pivot, title: 'Pivot 1', announceContext: '1 of 3' },
      { type: Pivot, title: 'Pivot 2', announceContext: '2 of 3' },
      { type: Pivot, title: 'Pivot 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Pivot, title: 'Pivot 1', announceContext: '1 of 3' },
      { type: Pivot, title: 'Pivot 2', announceContext: '2 of 3' },
      { type: Pivot, title: 'Pivot 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Pivot, title: 'Pivot 1', announceContext: '1 of 3' },
      { type: Pivot, title: 'Pivot 2', announceContext: '2 of 3' },
      { type: Pivot, title: 'Pivot 3', announceContext: '3 of 3' }
    ]
  }
];

export const Basic = () =>
  class Basic extends Announcer(lng.Component) {
    static _template() {
      return {
        debug: true,
        announcerEnabled: true,
        announcerTimeout: 15 * 1000,
        Column: {
          type: Column,
          w: 900,
          h: 400,
          itemSpacing: 20,
          items: rows
        }
      };
    }

    get announceContext() {
      // ! ! ! hack to add 2 sec pause until SSML is supported
      return ` ! ! ! !
              Press LEFT or RIGHT to review items,
              press UP or DOWN to review categories,
              press CENTER to select`;
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
