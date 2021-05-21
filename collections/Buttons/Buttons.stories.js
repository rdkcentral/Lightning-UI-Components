import lng from '@lightningjs/core';
import mdx from './Buttons.mdx';
import withStyles from '../../mixins/withStyles';
import Column from '../../layout/Column';
import {
  ActionButtonLarge,
  ActionButtonMedium,
  ActionButtonSmall,
  ActionButtonIconMedium,
  ActionButtonIconSmall,
  ActionButtonXsmall
} from '../../elements/ActionButton';
import icApps from '../../assets/images/ic_apps_white_32.png';
import icOverflowVertical from '../../assets/images/ic_overflow_vertical_white_32.png';
import icPlay from '../../assets/images/ic_play_white_32.png';
import icAvatar from '../../assets/images/ic_avatar_white_32.png';
import icMic from '../../assets/images/ic_mic_white_32.png';
import CollectionDocItem from '../CollectionDocItem';
import CollectionHeader from '../CollectionHeader';
import CollectionLabel from '../CollectionLabel';
export default {
  title: 'Collections/Buttons',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const styles = theme => {
  return {
    space: theme.spacing(4)
  };
};

export const Basic = () => {
  class Basic extends withStyles(lng.Component, styles) {
    static _template() {
      return {
        Buttons: {
          Column: {
            type: Column,
            itemSpacing: this.styles.space,
            items: [
              {
                type: CollectionHeader,
                url:
                  'https://etwiki.sys.comcast.net/display/XDSS/Action+buttons'
              },
              {
                type: CollectionLabel,
                title: 'Action Button Large'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonLarge,
                    backgroundType: 'fill',
                    icon: icApps,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonLarge,
                    icon: icApps,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonLarge,
                    icon: icApps,
                    title: 'Button (focus)'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Action Button Medium'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonMedium,
                    backgroundType: 'stroke',
                    icon: icPlay,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonMedium,
                    icon: icPlay,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonMedium,
                    icon: icPlay,
                    title: 'Button (focus)'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Action Button Icon Medium'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonIconMedium,
                    backgroundType: 'stroke',
                    icon: icOverflowVertical,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonIconMedium,
                    icon: icOverflowVertical,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonIconMedium,
                    icon: icOverflowVertical,
                    title: 'Button (focus)'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Action Button Small'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonSmall,
                    backgroundType: 'stroke',
                    icon: icPlay,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonSmall,
                    icon: icPlay,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonSmall,
                    icon: icPlay,
                    title: 'Button (focus)'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Action Button Icon Small'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonIconSmall,
                    backgroundType: 'stroke',
                    icon: icOverflowVertical,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonIconSmall,
                    icon: icOverflowVertical,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonIconSmall,
                    icon: icOverflowVertical,
                    title: 'Button (focus)'
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Action Button Xsmall'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ActionButtonXsmall,
                    backgroundType: 'stroke',
                    icon: icAvatar,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonXsmall,
                    icon: icAvatar,
                    title: 'Button'
                  },
                  {
                    type: ActionButtonXsmall,
                    icon: icMic,
                    backgroundType: 'ghost',
                    title: 'Button'
                  },
                  {
                    type: ActionButtonXsmall,
                    icon: icMic,
                    backgroundType: 'ghost',
                    title: 'Button (focus)'
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Buttons.Column');
    }
  }

  return Basic;
};
