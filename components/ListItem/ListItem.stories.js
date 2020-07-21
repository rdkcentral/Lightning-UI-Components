import lng from 'wpe-lightning';
import { boolean, radios, withKnobs } from '@storybook/addon-knobs';

import { ListItemBase } from '.';
import mdx from './ListItem.mdx';

export default {
  title: 'ListItemBase',
  component: ListItemBase,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const label = 'Background';
const options = {
  Fill: 'fill',
  Float: 'float'
};
const defaultValue = 'fill';
const groupId = 'BASIC-1';

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          background: radios(label, options, defaultValue, groupId),
          leftSlot: { w: 50, h: 50, rect: true },
          rightSlot: { w: 50, h: 50, rect: true }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false, groupId)) {
        return this.tag('ListItem');
      }
    }
  };

export const StackedLeft = () =>
  class Stacked extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          leftSlot: {
            Top: {
              h: 30,
              w: 80,
              rect: true,
              flexItem: { margin: 1 }
            },
            Bottom: {
              h: 30,
              w: 80,
              rect: true,
              flexItem: { margin: 1 }
            }
          },
          rightSlot: { w: 50, h: 50, rect: true }
        }
      };
    }
  };

export const StackedRight = () =>
  class Stacked extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          rightSlot: {
            Top: {
              h: 30,
              w: 80,
              rect: true,
              flexItem: { margin: 1 }
            },
            Bottom: {
              h: 30,
              w: 80,
              rect: true,
              flexItem: { margin: 1 }
            }
          },
          leftSlot: { w: 50, h: 50, rect: true }
        }
      };
    }
  };

export const Text = () =>
  class Text extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          leftSlot: {
            Text: {
              text: {
                fontSize: 28,
                lineHeight: 40,
                text: 'Hello world'
              }
            }
          }
        }
      };
    }
  };

export const StackedText = () =>
  class StackedText extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          leftSlot: {
            y: -4,
            Text1: {
              h: 40,
              text: {
                fontSize: 28,
                lineHeight: 40,
                text: `Hi I'm a title`
              }
            },
            Text2: {
              h: 32,
              text: {
                fontSize: 24,
                lineHeight: 32,
                text: `And I'm a subtitle`
              }
            }
          }
        }
      };
    }
  };
