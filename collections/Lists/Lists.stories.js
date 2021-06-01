import lng from '@lightningjs/core';
import mdx from './Lists.mdx';
import { Column } from '../../layout';
import withStyles from '../../mixins/withStyles';
import ListItem, {
  ListItemRadio,
  ListItemToggle,
  ListItemSlider,
  ListItemPicker,
  ListItemImage
} from '../../patterns/ListItem';
import CollectionHeader from '../CollectionHeader';
import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';
import icWifi from '../../assets/images/ic_wifi_white_40.png';
import icSettings from '../../assets/images/ic_settings_white_40.png';
import list56 from '../../assets/images/list_56.png';

export default {
  title: 'Collections/Lists',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const style = theme => {
  return {
    space: theme.spacing(4)
  };
};

export const Basic = args =>
  class Basic extends withStyles(lng.Component, style) {
    static _template() {
      return {
        Lists: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: this.styles.space,
            items: [
              {
                type: CollectionHeader,
                url: 'https://etwiki.sys.comcast.net/display/XDSS/List+items'
              },
              {
                type: CollectionLabel,
                title: 'Medium'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    icon: [icWifi]
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    icon: [icWifi]
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    icon: [icSettings, icWifi]
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    icon: [icSettings, icWifi]
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    icon: icWifi
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata',
                    icon: icWifi
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemRadio,
                    title: 'List Item'
                  },
                  {
                    type: ListItemRadio,
                    title: 'List Item (focus)'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemRadio,
                    title: 'List Item',
                    subtitle: 'List Item Metadata'
                  },
                  {
                    type: ListItemRadio,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemToggle,
                    title: 'List Item',
                    checked: true
                  },
                  {
                    type: ListItemToggle,
                    title: 'List Item (focus)',
                    checked: true
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemToggle,
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    checked: true
                  },
                  {
                    type: ListItemToggle,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata',
                    checked: true
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    subtitle: 'List Item Metadata'
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata'
                  }
                ]
              },
              // {
              //   type: CollectionDocItem,
              //   h: ListItemSlider.styles.h,
              //   url: '/?path=/story/patterns-listitemslider--basic',
              //   items: [
              //     {
              //       type: ListItemSlider,
              //       title: 'ListItem'
              //     },
              //     {
              //       type: ListItemSlider,
              //       title: 'ListItem (focus)'
              //     }
              //   ]
              // },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemPicker,
                    title: 'ListItem',
                    options: [
                      'List Item Metadata 1',
                      'List Item Metadata 2',
                      'List Item Metadata 3'
                    ]
                  },
                  {
                    type: ListItemPicker,
                    title: 'ListItem (focus)',
                    options: [
                      'List Item Metadata 1',
                      'List Item Metadata 2',
                      'List Item Metadata 3'
                    ]
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Small'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    icon: icWifi,
                    size: 'small'
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    icon: icWifi,
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    icon: icWifi,
                    size: 'small'
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata',
                    icon: icWifi,
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemImage,
                    title: 'List Item',
                    image: list56,
                    size: 'small'
                  },
                  {
                    type: ListItemImage,
                    title: 'List Item (focus)',
                    image: list56,
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemImage,
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    image: list56,
                    size: 'small'
                  },
                  {
                    type: ListItemImage,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata',
                    image: list56,
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemPicker,
                    title: 'ListItem',
                    size: 'small',
                    options: [
                      'List Item Metadata 1',
                      'List Item Metadata 2',
                      'List Item Metadata 3'
                    ]
                  },
                  {
                    type: ListItemPicker,
                    title: 'ListItem (focus)',
                    size: 'small',
                    options: [
                      'List Item Metadata 1',
                      'List Item Metadata 2',
                      'List Item Metadata 3'
                    ]
                  }
                ]
              },
              {
                type: CollectionDocItem,
                h: ListItemSlider.styles.h,
                url: '/?path=/story/patterns-listitemslider--basic',
                items: [
                  {
                    type: ListItemSlider,
                    title: 'List Item',
                    size: 'small'
                  },
                  {
                    type: ListItemSlider,
                    title: 'List Item (focus)',
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                h: ListItemToggle.styles.h,
                items: [
                  {
                    type: ListItemToggle,
                    title: 'List Item',
                    size: 'small',
                    checked: true
                  },
                  {
                    type: ListItemToggle,
                    title: 'List Item (focus)',
                    size: 'small',
                    checked: true
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemToggle,
                    title: 'List Item',
                    subtitle: 'List Row Metadata',
                    size: 'small',
                    checked: true
                  },
                  {
                    type: ListItemToggle,
                    title: 'List Item (focus)',
                    subtitle: 'List Row Metadata',
                    size: 'small',
                    checked: true
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemRadio,
                    title: 'List Item',
                    size: 'small'
                  },
                  {
                    type: ListItemRadio,
                    title: 'List Item (focus)',
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItemRadio,
                    title: 'List Item',
                    subtitle: 'List Row Metadata',
                    size: 'small'
                  },
                  {
                    type: ListItemRadio,
                    title: 'List Item (focus)',
                    subtitle: 'List Row Metadata',
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    size: 'small',
                    backgroundType: 'float'
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    size: 'small',
                    backgroundType: 'float'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: ListItem,
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    size: 'small'
                  },
                  {
                    type: ListItem,
                    title: 'List Item (focus)',
                    subtitle: 'List Item Metadata',
                    size: 'small'
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
