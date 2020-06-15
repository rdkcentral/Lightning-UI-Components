import lng from 'wpe-lightning';
import { action } from '@storybook/addon-actions';

import Column from '.';
import FocusManager from '../FocusManager';
import mdx from './Column.mdx';

export default {
  title: 'Column',
  component: Column,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class BasicExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          children: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: Button,
            buttonText: 'Button',
            y: i * 50
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const Scrolling = () =>
  class ScrollingExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          children: Array.apply(null, { length: 20 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`,
            y: i * 50
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const MultiColumn = () =>
  class MultiColumnExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        FocusManager: {
          type: FocusManager,
          direction: 'row',
          children: [{ type: Basic() }, { type: Basic(), x: 180 }]
        }
      };
    }

    _getFocused() {
      return this.tag('FocusManager');
    }
  };

const getMoreItems = () => {
  action('provider')();
  return Promise.resolve({
    appendItems: true,
    getMoreItems,
    items: Array.apply(null, { length: 5 }).map((_, i) => ({
      type: Button,
      buttonText: `Extra Button ${i + 1}`
    }))
  });
};
export const Provider = () =>
  class ProviderExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Text: {
          text: {
            fontSize: 20,
            text: 'Key down till you find the end 😉 '
          }
        },
        Column: {
          y: 50,
          type: Column,
          provider: getMoreItems(),
          children: Array.apply(null, { length: 20 }).map((_, i) => {
            return { type: Button, buttonText: `Button ${i + 1}`, y: i * 50 };
          })
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const SkipFocus = () =>
  class ColumnExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          children: Array.apply(null, { length: 50 }).map((_, i) => {
            if (i % 4 === 0)
              return {
                type: Title,
                titleText: 'Title',
                y: i * 50,
                skipFocus: true
              };
            return { type: Button, buttonText: 'Button', y: i * 50 };
          })
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

class Title extends lng.Component {
  static _template() {
    return {
      Label: {
        x: 75,
        y: 22,
        mount: 0.5,
        color: 0xffffffff,
        text: { fontSize: 20 }
      }
    };
  }

  _init() {
    this.tag('Label').text = this.titleText;
  }
}

class Button extends lng.Component {
  static _template() {
    return {
      color: 0xff1f1f1f,
      texture: lng.Tools.getRoundRect(150, 40, 4),
      Label: {
        x: 75,
        y: 22,
        mount: 0.5,
        color: 0xffffffff,
        text: { fontSize: 20 }
      }
    };
  }
  _init() {
    this.tag('Label').text = this.buttonText;
  }
  _focus() {
    this.color = 0xffffffff;
    this.tag('Label').color = 0xff1f1f1f;
  }
  _unfocus() {
    this.color = 0xff1f1f1f;
    this.tag('Label').color = 0xffffffff;
  }
}
