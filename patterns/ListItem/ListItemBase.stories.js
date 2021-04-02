import lng from '@lightningjs/core';

import { ListItemBase } from '.';
import mdx from './ListItem.mdx';

export default {
  title: 'Patterns/ListItemBase',
  parameters: {
    tag: 'ListItem',
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          size: args.size,
          backgroundType: args.backgroundType
        }
      };
    }

    _init() {
      this.tag('ListItem')._Left.patch({
        w: 50,
        h: 50,
        rect: true
      });
      this.tag('ListItem')._Right.patch({
        w: 50,
        h: 50,
        rect: true
      });
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('ListItem');
      }
    }
  };
Basic.args = {
  size: 'large',
  backgroundType: 'fill'
};
Basic.argTypes = {
  focused: { control: 'boolean' },
  size: {
    control: {
      type: 'radio',
      options: ['large', 'small']
    }
  },
  backgroundType: {
    control: {
      type: 'radio',
      options: ['float', 'fill', 'ghost']
    }
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('ListItem')
        : () => {};
      component._refocus();
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

    _init() {
      this.tag('ListItem')._Left.patch({
        h: 50,
        rect: true,
        flexItem: { grow: 1 }
      });
    }
  };

export const Stacked = () =>
  class Stacked extends lng.Component {
    static _template() {
      return {
        ListItem: { type: ListItemBase }
      };
    }

    _init() {
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

      this.tag('ListItem')._Left.patch({ ...slot });
      this.tag('ListItem')._Right.patch({ ...slot });
    }
  };

export const Text = () =>
  class Text extends lng.Component {
    static _template() {
      return {
        ListItem: { type: ListItemBase }
      };
    }

    _init() {
      this.tag('ListItem')._Left.patch({
        Text: {
          text: {
            fontSize: 28,
            h: 40,
            text: 'Hello world'
          }
        }
      });
    }
  };

export const StackedText = () =>
  class StackedText extends lng.Component {
    static _template() {
      return {
        ListItem: { type: ListItemBase }
      };
    }

    _init() {
      this.tag('ListItem')._Left.patch({
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
      });
    }
  };
