import lng from '@lightningjs/core';

import withAnnouncer, { defaultAbbrevConfig } from '.';
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
    w: 1920 - 160, // x offset from preview.js * 2,
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
    w: 1920 - 160, // x offset from preview.js * 2,
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
    w: 1920 - 160, // x offset from preview.js * 2,
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
          w: 1920 - 160, // x offset from preview.js * 2,
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

const createRow = items => ({
  type: Row,
  w: 900,
  h: 100,
  itemSpacing: 30,
  items
});
const createPivot = (title, announceContext) => ({
  type: Pivot,
  title,
  announceContext
});

const abbrevRows = [
  createRow([
    createPivot('TV-14', '1 of 9'),
    createPivot('(CC)', '2 of 9'),
    createPivot('HD', '3 of 9')
  ]),
  createRow([
    createPivot('ENG', '4 of 9'),
    createPivot('ENG+ES', '5 of 9'),
    createPivot('AD', '6 of 9')
  ]),
  createRow([
    createPivot('RT 95%', '7 of 9'),
    createPivot('S3E12', '8 of 9'),
    createPivot('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')
  ])
];

export const WithDefaultAbbreviations = () => {
  class WithAbbreviations extends lng.Component {
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
          items: abbrevRows
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
  }
  return WithAbbreviations;
};
WithDefaultAbbreviations.parameters = {
  announcerOptions: {
    abbreviations: defaultAbbrevConfig
  }
};
