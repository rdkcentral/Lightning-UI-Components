import lng from '@lightningjs/core';

import withAnnouncer from '.';
import { Column, Row } from '../../layout';
import { Pivot } from '../../elements';
import mdx from './withAnnouncer.mdx';

export default {
  title: 'Mixins / withAnnouncer',
  component: withAnnouncer,
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
  class Basic extends lng.Component {
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
      return [
        'PAUSE-2.2',
        `Press LEFT or RIGHT to review items,
              press UP or DOWN to review categories,
              press CENTER to select`
      ];
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
