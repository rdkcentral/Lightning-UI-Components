import lng from '@lightningjs/core';
import mdx from './Tabs.mdx';
import Column from '../../layout/Column';
import CollectionHeader from '../CollectionHeader';
import CollectionLabel from '../CollectionLabel';
import CollectionDocItem from '../CollectionDocItem';
import TabBar, { Tab } from '../../elements/Tabs';
import icPerson from '../../assets/images/person.png';
import { getXfinityTheme } from '../../Styles/createTheme';
import { withFocusAlways } from '..';

export default {
  title: 'Collections/Tabs',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  verticalSpace: theme.spacing(4),
  horizontalSpace: theme.spacing(5)
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Tabs: {
          Column: {
            type: Column,
            itemSpacing: style.verticalSpace,
            items: [
              {
                type: CollectionLabel,
                title: 'Fixed Tab'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 80,
                items: [
                  {
                    type: TabBar,
                    barLength: 158,
                    tabHeight: 80,
                    tabWidth: 205,
                    tabs: [
                      {
                        type: Tab,
                        icon: icPerson,
                        title: 'Tab',
                        skipFocus: true
                      },
                      {
                        type: withFocusAlways(Tab),
                        icon: icPerson,
                        skipFocus: true
                      },
                      {
                        type: withFocusAlways(Tab),
                        title: 'Tab',
                        skipFocus: true
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Fixed Tab Bar'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 80,
                items: [
                  {
                    type: TabBar,
                    barLength: 198,
                    tabHeight: 80,
                    tabWidth: 285,
                    tabs: [
                      {
                        type: Tab,
                        icon: icPerson,
                        title: 'Active Tab'
                      },
                      {
                        type: Tab,
                        icon: icPerson,
                        title: 'Unfocused Tab'
                      },
                      {
                        type: withFocusAlways(Tab),
                        icon: icPerson,
                        title: 'Focused Tab'
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionDocItem,
                defaultHeight: 80,
                items: [
                  {
                    type: TabBar,
                    barLength: 118,
                    tabHeight: 80,
                    tabWidth: 205,
                    tabs: [
                      {
                        type: Tab,
                        icon: icPerson
                      },
                      {
                        type: Tab,
                        icon: icPerson
                      },
                      {
                        type: withFocusAlways(Tab),
                        icon: icPerson
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionDocItem,
                defaultHeight: 80,
                items: [
                  {
                    type: TabBar,
                    barLength: 158,
                    tabHeight: 80,
                    tabWidth: 245,
                    tabs: [
                      {
                        type: Tab,
                        title: 'Active Tab'
                      },
                      {
                        type: Tab,
                        title: 'Unfocused Tab'
                      },
                      {
                        type: withFocusAlways(Tab),
                        title: 'Focused Tab'
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
      return this.tag('Tabs.Column');
    }
  };
