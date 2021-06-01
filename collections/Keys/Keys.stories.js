import lng from '@lightningjs/core';
import Key from '../../elements/Key';
import withStyles from '../../mixins/withStyles';
import Column from '../../layout/Column';
import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';
import BackspaceIcon from '../../assets/images/ic_backspace_white_32.png';
import mdx from './Keys.mdx';

export default {
  title: 'Collections / Keys',
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

export const Basic = args =>
  class Basic extends withStyles(lng.Component, styles) {
    static _template() {
      return {
        Keys: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: this.styles.space,
            items: [
              {
                type: CollectionLabel,
                title: 'XLarge'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: 'Space',
                    size: 'xlarge'
                  },
                  {
                    type: Key,
                    label: 'Space (focus)',
                    size: 'xlarge'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: 'Space',
                    size: 'xlarge',
                    icon: {
                      src: BackspaceIcon
                    }
                  },
                  {
                    type: Key,
                    label: 'Space (focus)',
                    size: 'xlarge',
                    icon: {
                      src: BackspaceIcon
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Large'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: 'ABC',
                    size: 'large'
                  },
                  {
                    type: Key,
                    label: 'ABC (focus)',
                    size: 'large'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: 'ABC',
                    size: 'large',
                    icon: {
                      src: BackspaceIcon
                    }
                  },
                  {
                    type: Key,
                    label: 'ABC (focus)',
                    size: 'large',
                    icon: {
                      src: BackspaceIcon
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Medium'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: '&123',
                    size: 'medium'
                  },
                  {
                    type: Key,
                    label: '&123 (focus)',
                    size: 'medium'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: '&123',
                    size: 'medium',
                    icon: {
                      src: BackspaceIcon
                    }
                  },
                  {
                    type: Key,
                    label: '&123 (focus)',
                    size: 'medium',
                    icon: {
                      src: BackspaceIcon
                    }
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
                    type: Key,
                    label: 'A',
                    size: 'small'
                  },
                  {
                    type: Key,
                    label: 'A (focus)',
                    size: 'small'
                  }
                ]
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: 'A',
                    size: 'small',
                    icon: {
                      src: BackspaceIcon
                    }
                  },
                  {
                    type: Key,
                    label: 'A (focus)',
                    size: 'small',
                    icon: {
                      src: BackspaceIcon
                    }
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Dynamic'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Key,
                    label: '@gmail.com',
                    size: 'large'
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Keys.Column');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
