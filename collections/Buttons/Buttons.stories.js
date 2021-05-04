import lng from '@lightningjs/core';
import mdx from './Buttons.mdx';
import icApps from '../../assets/images/ic_apps_white_32.png';
import icOverflowVertical from '../../assets/images/ic_overflow_vertical_white_32.png';
import icPlay from '../../assets/images/ic_play_white_32.png';
import Column from '../../layout/Column';
import Row from '../../layout/Row';
import CollectionGroup from '../CollectionGroup';
import {
  ActionButtonLarge,
  ActionButtonMedium,
  ActionButtonSmall,
  ActionButtonIconMedium,
  ActionButtonIconSmall
} from '../../elements/ActionButton';
import { getXfinityTheme } from '../../Styles/createTheme';

export default {
  title: 'Collections/Buttons',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  space: theme.spacing(4)
};

export const Basic = () => {
  class Basic extends lng.Component {
    static _template() {
      return {
        ButtonCollection: {
          Column: {
            type: Column,
            itemSpacing: style.space,
            items: [
              {
                type: CollectionGroup,
                title: 'Large Standard',
                items: [
                  {
                    h: ActionButtonLarge.styles.h,
                    type: Row,
                    itemSpacing: style.space,
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
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionGroup,
                title: 'Medium Standard',
                items: [
                  {
                    h: ActionButtonMedium.styles.h,
                    type: Row,
                    itemSpacing: style.space,
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
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionGroup,
                title: 'Medium Icon',
                items: [
                  {
                    h: ActionButtonIconMedium.styles.h,
                    type: Row,
                    itemSpacing: style.space,
                    items: [
                      {
                        type: ActionButtonIconMedium,
                        backgroundType: 'stroke',
                        icon: icOverflowVertical
                      },
                      {
                        type: ActionButtonIconMedium,
                        icon: icOverflowVertical
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionGroup,
                title: 'Small Standard',
                items: [
                  {
                    h: ActionButtonSmall.styles.h,
                    type: Row,
                    itemSpacing: style.space,
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
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionGroup,
                title: 'Small Icon',
                items: [
                  {
                    h: 60,
                    type: Row,
                    itemSpacing: style.space,
                    items: [
                      {
                        type: ActionButtonIconSmall,
                        backgroundType: 'stroke',
                        icon: icOverflowVertical
                      },
                      {
                        type: ActionButtonIconSmall,
                        icon: icOverflowVertical
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('ButtonCollection.Column');
    }
  }

  return Basic;
};
