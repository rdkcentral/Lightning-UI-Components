import lng from '@lightningjs/core';

import Tile from '../../elements/Tile';
import { CardLaunchpad } from '../../patterns/Card';
import { withStyles } from '../../mixins';
import ActionButtonXsmall from '../../elements/ActionButton';
import ContentTray from '.';
import mdx from './ContentTray.mdx';
import viewAllIcon from '../../assets/images/view_all.png';

export default {
  title: 'patterns/ContentTray',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

class CustomActionButton extends withStyles(ActionButtonXsmall, theme => {
  // use withStyles to customize how the component looks
  return {
    icon: {
      size: 20,
      spacing: theme.spacing(1)
    },
    text: theme.typography.caption,
    radius: 52 / 2,
    h: 52
  };
}) {
  _updateIcon() {
    super._updateIcon();
    if (this._Icon) {
      // Since we are using fixed there is some code in button that will not respect the icon.spacing style. Not sure why this is in there to be honest
      this._Icon.patch({
        flexItem: { marginRight: this.title ? this.styles.icon.spacing : 0 }
      });
    }
  }

  _focus() {
    super._focus();
    this.patch({
      w: 144,
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

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ContentTray: {
          type: ContentTray,
          itemSpacing: args.itemSpacing,
          lazyScroll: true,
          w: 1920 - 160,
          items: [
            {
              type: CustomActionButton,
              fixed: true,
              icon: viewAllIcon,
              centerInParent: true,
              backgroundType: 'fill'
            },
            {
              type: Tile,
              w: 100,
              h: 100,
              radius: 50,
              imgRadius: 50,
              src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6847411883730560242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
              items: [
                '7245349740136736112',
                '7615274088441709112',
                '4787646614985090112',
                '6366577040434117112',
                '5879798181352259112'
              ].map(entityId => {
                return {
                  type: CardLaunchpad,
                  src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                  shouldAnimate: false,
                  focused: true,
                  title: 'Program Title',
                  description: 'Short description',
                  data: [
                    '86%',
                    {
                      icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                      title: 'Rotten Tomatoes rating'
                    }
                  ]
                };
              })
            },
            {
              type: Tile,
              w: 100,
              h: 100,
              radius: 50,
              imgRadius: 50,
              src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=6887896329265323242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
              items: [
                '7615274088441709112',
                '4787646614985090112',
                '6366577040434117112',
                '5879798181352259112'
              ].map(entityId => {
                return {
                  type: CardLaunchpad,
                  src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                  shouldAnimate: false,
                  focused: true,
                  title: 'Program Title',
                  description: 'Short description',
                  data: [
                    '86%',
                    {
                      icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                      title: 'Rotten Tomatoes rating'
                    }
                  ]
                };
              })
            },
            {
              type: Tile,
              w: 100,
              h: 100,
              radius: 50,
              imgRadius: 50,
              src: 'https://edge.myriad-gn.top.comcast.net/select/image?roundAmount=16&outputFormat=png&entityId=5834457307371791242&width=140&ratio=1x1&rule=title&default=true&preferredLanguage=en-US',
              items: [
                '4787646614985090112',
                '7245349740136736112',
                '7615274088441709112',
                '6366577040434117112',
                '5879798181352259112'
              ].map(entityId => {
                return {
                  type: CardLaunchpad,
                  src: `https://myriad.merlin.comcast.com/select/image?entityId=${entityId}&width=640&ratio=16x9`,
                  shouldAnimate: false,
                  focused: true,
                  title: 'Program Title',
                  description: 'Short description',
                  data: [
                    '86%',
                    {
                      icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
                      title: 'Rotten Tomatoes rating'
                    }
                  ]
                };
              })
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
        return this.tag('ContentTray');
      }
    }
  };

Basic.args = {
  itemSpacing: 16,
  focused: true
};

Basic.argTypes = {
  itemSpacing: { control: 'number' },
  focused: { control: 'boolean' }
};

Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ContentTray')
        : () => {};
      component._refocus();
    }
  }
};
