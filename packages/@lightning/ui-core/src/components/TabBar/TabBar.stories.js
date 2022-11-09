import lng from '@lightningjs/core';

import Tile from '../Tile/index.js';
import ButtonSmall from '../Button/ButtonSmall.js';
import Icon from '../Icon/index.js';
import viewAllIcon from '../../assets/images/view_all.png';
import { createModeControl } from '../../../storybook/index.js';
import lightningIcon from '../../assets/images/ic_lightning_white_32.png';
import Row from '../Row/index.js';
import Column from '../Column/index.js';
import cast from '../../assets/images/cast.png';
import belair from '../../assets/images/tile-image.png';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import { context } from '../../globals/index.js';
import Tab from './Tab.js';
import TabBarComponent from './index.js';
import mdx from './TabBar.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[16]}/TabBar`,
  args: {
    collapse: false,
    alphaSelectedTab: false,
    wrapSelected: false
  },
  argTypes: {
    ...createModeControl({ options: ['focused'], defaultValue: 'focused' }),
    alphaSelectedTab: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
      description:
        'when true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',
      type: 'boolean'
    },
    collapse: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
      description:
        'when true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',
      type: 'boolean'
    },
    wrapSelected: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
      description:
        'enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',
      type: 'boolean'
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
const tilesA = createTiles([belair, parks, jurassic, trolls, pets]);
const tilesB = tilesA.slice().reverse();

const createColumn = titles => {
  return {
    type: Column,
    h: 300,
    w: 410,
    y: 50,
    style: { itemSpacing: 16 },
    neverScroll: true,
    items: titles.map(title => ({
      w: 410,
      type: Tile,
      title: `${title} Item 1`,
      subtitle: `${title} Subtitle 1`,
      size: 'small',
      image: cast
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

export const TabBar = () =>
  class TabBar extends lng.Component {
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
  alphaSelectedTab: true,
  contentSpacing:
    context.theme.spacer.xxxl +
    context.theme.spacer.lg +
    context.theme.spacer.xs,
  itemSpacing: context.theme.spacer.xl
};
CustomTabs.argTypes = {
  contentSpacing: {
    control: 'number',
    defaultValue:
      context.theme.spacer.xxxl +
      context.theme.spacer.lg +
      context.theme.spacer.xs,
    table: {
      defaultValue: {
        summary:
          context.theme.spacer.xxxl +
          context.theme.spacer.lg +
          context.theme.spacer.xs
      }
    },
    description: 'pixels between tabs and tab content',
    type: 'number'
  },
  itemSpacing: {
    control: 'number',
    defaultValue: context.theme.spacer.xl,
    table: {
      defaultValue: {
        summary: context.theme.spacer.xl
      }
    },
    description: 'pixels between tab components (Row property)',
    type: 'number'
  }
};
