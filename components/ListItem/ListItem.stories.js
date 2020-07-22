import lng from 'wpe-lightning';
import { boolean, radios, withKnobs, text } from '@storybook/addon-knobs';

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
const makeOptions = (...opts) => {
  return opts.reduce(
    (obj, key) => ({
      ...obj,
      [key]: key.toLowerCase()
    }),
    {}
  );
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          size: radios('Size', makeOptions('Large', 'Small'), 'large'),
          background: radios(label, makeOptions('Fill', 'Float'), 'fill'),
          leftSlot: { w: 50, h: 50, rect: true },
          rightSlot: { w: 50, h: 50, rect: true }
        }
      };
    }

    _getFocused() {
      if (boolean('Focused', false)) {
        return this.tag('ListItem');
      }
    }
  };

export const FullWidth = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          leftSlot: {
            h: 50,
            rect: true,
            flexItem: { grow: 1 }
          }
        }
      };
    }
  };

export const Stacked = () =>
  class Stacked extends lng.Component {
    static _template() {
      const slot = {
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
      };

      return {
        ListItem: {
          type: ListItemBase,
          leftSlot: slot,
          rightSlot: slot
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
            Text1: {
              text: {
                fontSize: 28,
                text: `This is a title`
              }
            },
            Text2: {
              alpha: 0.7,
              text: {
                fontSize: 22,
                text: `this is a subtitle`
              }
            }
          }
        }
      };
    }
  };
