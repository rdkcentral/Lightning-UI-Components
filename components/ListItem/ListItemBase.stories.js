import lng from 'wpe-lightning';
import { boolean, radios, withKnobs } from '@storybook/addon-knobs';

import { ListItemBase } from '.';
import mdx from './ListItem.mdx';
import { makeOptions } from '../../.storybook/utils';

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

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemBase,
          size: radios('Size', makeOptions('Large', 'Small'), 'large'),
          background: radios('Background', makeOptions('Fill', 'Float'), 'fill')
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
