import lng from '@lightningjs/core';
import Column from '../../layout/Column';
import Row from '../../layout/Row';
import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';
import Badge from '../../elements/Badge';
import ProgressBar from '../../elements/ProgressBar';
import Tag from '../../elements/Tag';
import Tile from '../../elements/Tile';
import { withFocusAlways } from '..';
import { getXfinityTheme } from '../../Styles/createTheme';
import ADIcon from '../../assets/images/ic_ad.png';
import DolbyIcon from '../../assets/images/ic_dolby.png';
import DolbyAtmosIcon from '../../assets/images/ic_dolby_atmos.png';
import mdx from './Indicators.mdx';

export default {
  title: 'Collections / Indicators',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  horizontalSpace: theme.spacing(2),
  verticalSpace: theme.spacing(4)
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Indicators: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: style.verticalSpace,
            items: [
              {
                type: CollectionLabel,
                title: 'Badge',
                skipFocus: true
              },
              {
                type: CollectionDocItem,
                defaultHeight: 32,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Badge,
                    title: 'PG-13'
                  },
                  {
                    type: Badge,
                    icon: DolbyIcon,
                    w: 72
                  },
                  {
                    type: Badge,
                    icon: ADIcon,
                    w: 48
                  },
                  {
                    type: Badge,
                    icon: DolbyAtmosIcon,
                    w: 120
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Progress Bar'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 32,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: ProgressBar,
                    w: 1760,
                    progress: 0.48
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Tag'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 100,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Column,
                    itemSpacing: 60,
                    items: [
                      {
                        type: Row,
                        itemSpacing: 88,
                        items: [
                          {
                            type: Tag,
                            backgroundColor: theme.palette.yellow.indicator,
                            title: 'Tag',
                            titleColor: theme.palette.grey[100]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.red.indicator,
                            title: 'Tag',
                            titleColor: theme.palette.grey[0]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.blue.indicator,
                            title: 'Tag',
                            titleColor: theme.palette.grey[0]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.grey[5],
                            title: 'Tag',
                            titleColor: theme.palette.grey[100]
                          }
                        ]
                      },
                      {
                        type: Row,
                        itemSpacing: 88,
                        items: [
                          {
                            type: Tag,
                            backgroundColor: '#f95600',
                            title: 'Tag',
                            titleColor: theme.palette.grey[100]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.purple.indicator,
                            title: 'Tag',
                            titleColor: theme.palette.grey[0]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.green.indicator,
                            title: 'Tag',
                            titleColor: theme.palette.grey[0]
                          },
                          {
                            type: Tag,
                            backgroundColor: theme.palette.grey[70],
                            title: 'Tag',
                            titleColor: theme.palette.grey[0]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Source'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 112,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Tile,
                    w: 80,
                    h: 80,
                    radius: 40
                  },
                  {
                    type: withFocusAlways(Tile),
                    w: 80,
                    h: 80,
                    radius: 40
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Indicators.Column');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
