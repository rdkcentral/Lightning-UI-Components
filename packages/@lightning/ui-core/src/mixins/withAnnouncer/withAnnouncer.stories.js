import lng from '@lightningjs/core';

import withAnnouncer, { defaultAbbrevConfig } from './index.js';
import { Column, Row, Button } from '../../components/index.js';
import mdx from './withAnnouncer.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[0]}/withAnnouncer`,
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
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 1920 - 160, // x offset from preview.js * 2,
    h: 100,
    itemSpacing: 30,
    items: [
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 1920 - 160, // x offset from preview.js * 2,
    h: 100,
    itemSpacing: 30,
    items: [
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
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
          style: {
            itemSpacing: 20
          },
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
const createButton = (title, announceContext) => ({
  type: Button,
  title,
  announceContext
});

const abbrevRows = [
  createRow([
    createButton('TV-14', '1 of 9'),
    createButton('(CC)', '2 of 9'),
    createButton('HD', '3 of 9')
  ]),
  createRow([
    createButton('ENG', '4 of 9'),
    createButton('ENG+ES', '5 of 9'),
    createButton('AD', '6 of 9')
  ]),
  createRow([
    createButton('RT 95%', '7 of 9'),
    createButton('S3E12', '8 of 9'),
    createButton('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')
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
          style: {
            itemSpacing: 20
          },
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
