import lng from '@lightningjs/core';

import TabBar, { Tab } from '.';
import mdx from './Tabs.mdx';
import icon from '../../assets/images/person.png';

export default {
  title: 'TabBar',
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
              icon: args.icon ? icon : undefined,
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
