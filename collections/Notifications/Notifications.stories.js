import lng from '@lightningjs/core';
import Notification from '../../patterns/Notification';
import Column from '../../layout/Column';
import CollectionDocItem from '../CollectionDocItem';
import CollectionHeader from '../CollectionHeader';
import CollectionLabel from '../CollectionLabel';
import icon from '../../assets/images/ic_lightning_white_32.png';
import { getXfinityTheme } from '../../Styles/createTheme';
import mdx from './Notifications.mdx';

export default {
  title: 'Collections / Notifications',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  verticalSpace: theme.spacing(4)
};

function withEnter(Base) {
  return class extends Base {
    _init() {
      super._init();
      this.enter();
    }
  };
}

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Notifications: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: style.verticalSpace,
            items: [
              {
                type: CollectionHeader,
                url:
                  'https://etwiki.sys.comcast.net/display/XDSS/Notification+banner'
              },
              {
                type: CollectionLabel,
                title: 'Expanded'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 112,
                items: [
                  {
                    type: withEnter(Notification),
                    icon: icon,
                    title: 'Title',
                    description: 'Description'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Expanded Action'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 112,
                items: [
                  {
                    type: withEnter(Notification),
                    icon: icon,
                    title: 'Title',
                    description: 'Description',
                    actionArea: {
                      text: 'Action Area',
                      icon: icon
                    }
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Notifications.Column');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
