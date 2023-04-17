/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import lng from '@lightningjs/core';
import Base from '../Base';
import Tile from '../Tile';
import Button from '../Button';
import ButtonSmall from '../Button/ButtonSmall.js';
import Icon from '../Icon';
import viewAllIcon from '../../assets/images/view_all.png';
import { createModeControl } from '../../docs/utils';
import lightningIcon from '../../assets/images/ic_lightning_white_32.png';
import Row from '../Row';
import Column from '../Column';
import { context } from '../../globals';
import Tab from './Tab.js';
import TabBarComponent from '.';
import mdx from './TabBar.mdx';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[16]}/TabBar`,
  args: {
    collapse: false,
    alphaSelectedTab: false,
    wrapSelected: false,
    mode: 'focused'
  },
  argTypes: {
    ...createModeControl({ summaryValue: 'focused' }),
    alphaSelectedTab: {
      control: 'boolean',
      description:
        'When true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',
      table: { defaultValue: { summary: false } }
    },
    collapse: {
      control: 'boolean',
      description:
        'When true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',
      table: { defaultValue: { summary: false } }
    },
    wrapSelected: {
      control: 'boolean',
      description:
        'Enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',
      table: { defaultValue: { summary: false } }
    }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

class CustomButton extends ButtonSmall {
  _focus() {
    super._focus();
    this.patch({
      w: 175,
      title: 'View All'
    });
    this.fireAncestors('$itemChanged');
  }
  _unfocus() {
    super._unfocus();
    this.patch({
      w: 72,
      title: ''
    });
    this.fireAncestors('$itemChanged');
  }
}

const createTiles = imgSrcs => {
  return imgSrcs.map(src => ({
    type: Tile,
    w: 410,
    h: 230,
    artwork: { src }
  }));
};
const tilesA = createTiles([
  'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
  'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',
  'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg',
  'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg',
  'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'
]);
const tilesB = tilesA.slice().reverse();

const createColumn = titles => {
  return {
    type: Column,
    h: 300,
    w: 410,
    style: { itemSpacing: 16 },
    neverScroll: true,
    items: titles.map(title => ({
      w: 410,
      type: Button,
      title
    }))
  };
};
const col1 = createColumn(['Item 1', 'Item 2', 'Item 3']);
const col2 = createColumn(['Async Item 1', 'Async Item 2', 'Async Item 3']);

const rowFunction = () => ({
  type: Row,
  items: tilesB,
  autoResizeHeight: true,
  alwaysScroll: true
});

const colPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(col2);
    }, 2000);
  });
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBarComponent,
          w: 1920 - 160,
          tabs: [
            {
              type: Tab,
              title: 'No Content Tab'
            },
            {
              type: Tab,
              title: 'Tab 1',
              tabContent: {
                type: Row,
                items: tilesA,
                autoResizeHeight: true,
                lazyScroll: true
              }
            },
            {
              type: Tab,
              title: 'Tab 2',
              tabContent: col1
            },
            {
              type: Tab,
              title: 'Tab 3',
              tabContent: rowFunction
            },
            {
              type: Tab,
              title: 'Tab 4',
              tabContent: colPromise
            }
          ]
        }
      };
    }
  };

class CustomTile extends Tile {
  static _template() {
    return {
      ...super._template(),
      SoftFocus: {}
    };
  }
  _update() {
    super._update();
    this._updateSoftFocus();
  }

  _updateSoftFocus() {
    const { color, spacer } = context.theme;
    if (this.mode === 'selected') {
      this.tag('SoftFocus').patch({
        rect: true,
        color: color.interactiveNeutralFocus,
        h: spacer.xs,
        w: spacer.xxxl + spacer.xxl + spacer.xs,
        mountX: 0.5,
        mountY: 1,
        y: this.h + spacer.lg + spacer.xs,
        x: this.w / 2
      });
    } else {
      this.tag('SoftFocus').patch({ h: 0, w: 0 });
    }
  }
}

const tileProps = {
  w: 100,
  h: 100,
  radius: 50,
  imgRadius: 50,
  artwork: { icon: lightningIcon }
};

export const CustomTabs = () =>
  class CustomTabs extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBarComponent,
          w: 1920 - 160,
          tabs: [
            {
              type: CustomButton,
              fixed: true,
              prefix: [{ type: Icon, icon: viewAllIcon, w: 20, h: 20 }],
              centerInParent: true,
              backgroundType: 'fill'
            },
            {
              type: CustomTile,
              ...tileProps,
              tabContent: {
                type: Row,
                items: tilesA,
                autoResizeHeight: true,
                lazyScroll: true
              }
            },
            {
              type: CustomTile,
              ...tileProps,
              tabContent: col1
            },
            {
              type: CustomTile,
              ...tileProps,
              tabContent: rowFunction
            },
            {
              type: CustomTile,
              ...tileProps,
              tabContent: colPromise
            }
          ]
        }
      };
    }
  };
CustomTabs.args = {
  alphaSelectedTab: false
};
CustomTabs.argTypes = {};

class ColumnContainer extends Base {
  static get __componentName() {
    return 'ColumnContainer';
  }
  static get tags() {
    return [
      'ClippingOffsetContainer',
      { name: 'Column', path: 'ClippingOffsetContainer.Column' }
    ];
  }
  static _template() {
    return {
      ClippingOffsetContainer: {
        w: 1920 - 160,
        h: 600,
        clipping: true,
        y: context.theme.layout.gutterY.xs * -1,
        x: 40 * -1,
        Column: {
          type: Column,
          x: 40,
          items: [
            {
              type: Row,
              items: tilesA,
              autoResizeHeight: true
            },
            {
              type: Row,

              items: tilesA,
              autoResizeHeight: true
            },
            {
              type: Row,

              items: tilesA,
              autoResizeHeight: true
            },
            {
              type: Row,

              items: tilesA,
              autoResizeHeight: true
            }
          ]
        }
      }
    };
  }
  _getFocused() {
    return this._Column;
  }
}

export const MultipleRows = () =>
  class MultipleRows extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBarComponent,
          w: context.theme.layout.marginX * 2,
          tabs: [
            {
              type: Tab,
              title: 'No Content Tab'
            },
            {
              type: Tab,
              title: 'Multiple Rows',
              tabContent: {
                type: ColumnContainer
              }
            },
            {
              type: Tab,
              title: 'Tab 2',
              tabContent: col1
            }
          ]
        }
      };
    }
  };

MultipleRows.args = {};
MultipleRows.parameters = {
  storyDetails:
    'This is an example of adding multiple rows in the tab content column. A ColumnContainer was created to allow for clipping needed for scrolling'
};
MultipleRows.argTypes = {};
