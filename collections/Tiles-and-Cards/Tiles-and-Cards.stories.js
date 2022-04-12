import lng from '@lightningjs/core';
import mdx from './Tiles-and-Cards.mdx';
import Column from '../../layout/Column';
import Tile from '../../elements/Tile';
import MetadataCard from '../../elements/MetadataCard';
import { getXfinityTheme } from '../../Styles/createTheme';
import CollectionDocItem from '../CollectionDocItem';
import CollectionHeader from '../CollectionHeader';
import CollectionLabel from '../CollectionLabel';
import { withFocusAlways } from '..';

export default {
  title: 'Collections/Tiles and Cards',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const theme = getXfinityTheme();
const style = {
  horizontalSpace: theme.spacing(5),
  verticalSpace: theme.spacing(4)
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TilesAndCards: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: style.verticalSpace,
            items: [
              {
                type: CollectionHeader,
                url: 'https://etwiki.sys.comcast.net/display/XDSS/Tile+previews'
              },
              {
                type: CollectionLabel,
                title: '3COL'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 400,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Tile,
                    w: 560,
                    h: 320,
                    skipFocus: true
                  },
                  {
                    type: Tile,
                    w: 560,
                    h: 320,
                    persistentMetadata: true,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Persistent Metadata Title',
                      secondLine: 'Persistent Metadata Subtitle'
                    }
                  },
                  {
                    type: withFocusAlways(Tile),
                    w: 560,
                    h: 320,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Focused Title',
                      secondLine: 'Focused Subtitle'
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: '4COL'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 310,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Tile,
                    w: 410,
                    h: 230,
                    skipFocus: true
                  },
                  {
                    type: Tile,
                    w: 410,
                    h: 230,
                    persistentMetadata: true,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Persistent Metadata Title',
                      secondLine: 'Persistent Metadata Subtitle'
                    }
                  },
                  {
                    type: withFocusAlways(Tile),
                    w: 410,
                    h: 230,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Focused Title',
                      secondLine: 'Focused Subtitle'
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: '5COL'
              },
              {
                type: CollectionDocItem,
                defaultHeight: 256,
                itemSpacing: style.horizontalSpace,
                items: [
                  {
                    type: Tile,
                    w: 320,
                    h: 176,
                    skipFocus: true
                  },
                  {
                    type: Tile,
                    w: 320,
                    h: 176,
                    persistentMetadata: true,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Persistent Metadata Title',
                      secondLine: 'Persistent Metadata Subtitle'
                    }
                  },
                  {
                    type: withFocusAlways(Tile),
                    w: 320,
                    h: 176,
                    skipFocus: true,
                    Metadata: {
                      type: MetadataCard,
                      firstLine: 'Focused Title',
                      secondLine: 'Focused Subtitle'
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: '6COL'
              },
              {
                type: Column,
                itemSpacing: style.verticalSpace * 2,
                items: [
                  {
                    type: CollectionDocItem,
                    defaultHeight: 360,
                    itemSpacing: style.horizontalSpace,
                    items: [
                      {
                        type: Tile,
                        w: 260,
                        h: 260,
                        skipFocus: true
                      },
                      {
                        type: Tile,
                        w: 260,
                        h: 260,
                        persistentMetadata: true,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Persistent Metadata Title',
                          secondLine: 'Persistent Metadate Subtitle'
                        }
                      },
                      {
                        type: withFocusAlways(Tile),
                        w: 260,
                        h: 260,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Focused Title',
                          secondLine: 'Focused Subtitle'
                        }
                      },
                      {
                        type: Tile,
                        w: 260,
                        h: 260,
                        radius: 130,
                        skipFocus: true
                      },
                      {
                        type: Tile,
                        w: 260,
                        h: 260,
                        radius: 130,
                        persistentMetadata: true,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Persistent Metadata Title',
                          secondLine: 'Persistent Metadata Subtitle'
                        }
                      },
                      {
                        type: withFocusAlways(Tile),
                        w: 260,
                        h: 260,
                        radius: 130,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Focused Title',
                          secondLine: 'Focused Subtitle'
                        }
                      }
                    ]
                  },
                  {
                    type: CollectionDocItem,
                    defaultHeight: 426,
                    items: [
                      {
                        type: Tile,
                        w: 260,
                        h: 346,
                        skipFocus: true
                      },
                      {
                        type: Tile,
                        w: 260,
                        h: 346,
                        persistentMetadata: true,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Persistent Metadata Title',
                          secondLine: 'Persistent Metadata Subtitle'
                        }
                      },
                      {
                        type: withFocusAlways(Tile),
                        w: 260,
                        h: 346,
                        skipFocus: true,
                        Metadata: {
                          type: MetadataCard,
                          firstLine: 'Focused Title',
                          secondLine: 'Focused Subtitle'
                        }
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
      return this.tag('TilesAndCards.Column');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
