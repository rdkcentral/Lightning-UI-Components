import lng from '@lightningjs/core';

import TabBar, { Tab } from '.';
import Column from '../../layout/Column';
import ListItem, { ListItemImage } from '../../patterns/ListItem';
import mdx from './Tabs.mdx';
import bolt from '../../assets/images/ic_lightning_white_32.png';
import cast from '../../assets/images/cast.png';
import cast1 from '../../assets/images/cast1.png';
import cast2 from '../../assets/images/cast2.png';

export default {
  title: 'Elements / TabBar',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBar,
          barLength: args.barLength,
          barSpacing: args.barSpacing,
          itemSpacing: args.itemSpacing,
          tabHeight: args.tabHeight,
          tabWidth: args.tabWidth,
          wrapSelected: args.wrapSelected,
          tabs: [
            {
              type: Tab,
              title: 'Tab Item 1'
            },
            {
              type: Tab,
              title: 'Tab Item 2'
            },
            {
              type: Tab,
              title: 'Tab Item 3'
            }
          ]
        }
      };
    }

    $tabChanged(selectedTab) {
      args.tabChanged(selectedTab.title);
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TabBar');
      }
    }
  };
Basic.args = {
  barLength: 150,
  barSpacing: 4,
  focused: true,
  itemSpacing: 0,
  tabHeight: 72,
  tabWidth: 230,
  wrapSelected: true
};
Basic.argTypes = {
  tabChanged: { action: 'tabChanged' },
  barLength: { control: 'number' },
  barSpacing: { control: 'number' },
  focused: { control: 'boolean' },
  itemSpacing: { control: 'number' },
  tabHeight: { control: 'number' },
  tabWidth: { control: 'number' },
  wrapSelected: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TabBar')
        : () => {};
      component._refocus();
    }
  }
};

export const TabProperties = args =>
  class TabProperties extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBar,
          tabs: [
            {
              type: Tab,
              h: args.h,
              w: args.w,
              title: args.title,
              icon: args.icon ? bolt : undefined,
              iconHeight: args.iconHeight,
              iconSize: args.iconSize,
              iconWidth: args.iconWidth,
              barLength: args.barLength
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('TabBar');
    }
  };
TabProperties.args = {
  h: 72,
  w: 230,
  barLength: 100,
  icon: true,
  iconHeight: undefined,
  iconSize: undefined,
  iconWidth: undefined,
  title: 'Tab Item'
};
TabProperties.argTypes = {
  h: { control: 'number' },
  w: { control: 'number' },
  barLength: { control: 'number' },
  icon: { control: 'boolean' },
  iconHeight: { control: 'number' },
  iconSize: {
    control: {
      type: 'select',
      options: [undefined, 'small', 'medium', 'large']
    }
  },
  iconWidth: { control: 'number' },
  title: { control: 'text' }
};

const col1 = {
  Column: {
    type: Column,
    h: 300,
    w: 410,
    y: 50,
    itemSpacing: 16,
    items: [
      {
        w: 410,
        type: ListItemImage,
        title: 'Item 1',
        subtitle: 'Subtitle 1',
        size: 'small',
        image: cast
      },
      {
        w: 410,
        type: ListItemImage,
        title: 'Item 2',
        subtitle: 'Subtitle 2',
        size: 'small',
        image: cast1
      },
      {
        w: 410,
        type: ListItemImage,
        title: 'Item 3',
        subtitle: 'Subtitle 3',
        size: 'small',
        image: cast2
      }
    ]
  }
};

const col2 = {
  Column: {
    type: Column,
    h: 300,
    w: 410,
    y: 50,
    itemSpacing: 16,
    items: [
      {
        w: 410,
        type: ListItem,
        title: 'Item 1',
        subtitle: 'Subtitle 1',
        size: 'small',
        icon: bolt
      },
      {
        w: 410,
        type: ListItem,
        title: 'Item 2',
        subtitle: 'Subtitle 2',
        size: 'small',
        icon: bolt
      },
      {
        w: 410,
        type: ListItem,
        title: 'Item 3',
        subtitle: 'Subtitle 3',
        size: 'small',
        icon: bolt
      }
    ]
  }
};

export const withContent = args =>
  class withContent extends lng.Component {
    static _template() {
      return {
        TabBar: {
          type: TabBar,
          barLength: 150,
          barSpacing: 4,
          itemSpacing: 0,
          tabHeight: 72,
          tabWidth: 205,
          wrapSelected: true,
          tabs: [
            {
              type: Tab,
              title: 'Tab Item 1',
              content: col1
            },
            {
              type: Tab,
              title: 'Tab Item 2',
              content: col2
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('TabBar');
    }
  };
withContent.args = {
  focused: true
};
withContent.argTypes = {
  focused: { control: 'boolean' }
};
withContent.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TabBar')
        : () => {};
      component._refocus();
    }
  }
};
