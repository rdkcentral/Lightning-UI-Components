import { Column } from '../../layout';
import CollectionHeader from '../CollectionHeader';
import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';
import icList56 from '../../assets/images/list_56.png';
import icSettings from '../../assets/images/ic_settings_white_40.png';
import icWifi from '../../assets/images/ic_wifi_white_40.png';
import ListItem, {
  ListItemRadio,
  ListItemToggle,
  ListItemSlider,
  ListItemPicker,
  ListItemImage
} from '../../patterns/ListItem';
import lng from '@lightningjs/core';
import mdx from './Lists.mdx';
import { withFocusAlways } from '../';
import withStyles from '../../mixins/withStyles';

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

export const Basic = () =>
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemRadio),
                    title: 'List Item'
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
                    type: withFocusAlways(ListItemRadio),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemToggle),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemToggle),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
                    subtitle: 'List Item Metadata'
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
                    title: 'ListItem'
                  },
                  {
                    type: withFocusAlways(ListItemSlider),
                    title: 'ListItem'
                  }
                ]
              },
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
                    type: withFocusAlways(ListItemPicker),
                    title: 'ListItem',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    image: icList56,
                    size: 'small'
                  },
                  {
                    type: withFocusAlways(ListItemImage),
                    title: 'List Item',
                    image: icList56,
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
                    image: icList56,
                    size: 'small'
                  },
                  {
                    type: withFocusAlways(ListItemImage),
                    title: 'List Item',
                    subtitle: 'List Item Metadata',
                    image: icList56,
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
                    type: withFocusAlways(ListItemPicker),
                    title: 'ListItem',
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
                    type: withFocusAlways(ListItemSlider),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemToggle),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemToggle),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemRadio),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItemRadio),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
                    type: withFocusAlways(ListItem),
                    title: 'List Item',
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
