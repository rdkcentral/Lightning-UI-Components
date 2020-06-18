import lng from 'wpe-lightning';
import { action } from '@storybook/addon-actions';
import { button, withKnobs, number } from '@storybook/addon-knobs';

import Column from '.';
import FocusManager from '../FocusManager';
import mdx from './Column.mdx';

export default {
  title: 'Column',
  component: Column,
  decorators: [withKnobs],
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
          items: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: Button,
            buttonText: 'Button'
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

const numberOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
};

export const TestCase = () =>
  class TestCaseExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          h: 400,
          scrollMount: 1,
          itemSpacing: 20,
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            h: 80,
            buttonText: `Button ${i}`
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
          scrollMount: number('scrollMount', 0, numberOptions),
          items: Array.apply(null, { length: 20 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ScrollTo = () =>
  class ScrollToExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          scrollMount: number('scrollMount', 0, numberOptions),
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`
          }))
        }
      };
    }

    _init() {
      const column = this.tag('Column');
      // return false to prevent re-render;
      const transition =
        number('itemTransition', column.itemTransition.duration, {
          min: 0,
          step: 0.1
        }) * 100;
      button('Button 1', () => !!column.scrollTo(0, transition));
      button('Button 5', () => !!column.scrollTo(4, transition));
      button('Button 10', () => !!column.scrollTo(9, transition));
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
          items: [{ type: Basic() }, { type: Basic(), x: 180 }]
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
          items: Array.apply(null, { length: 20 }).map((_, i) => {
            return {
              type: Button,
              buttonText: `Button ${i + 1}`
            };
          })
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const VaryingItemHeight = () =>
  class VaryingItemHeightExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            buttonText: 'Button',
            h: 40 + Math.floor(Math.random() * 100)
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ExpandableHeightItems = () =>
  class ExpandableHeightItemsExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
          items: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: ExpandingButton,
            buttonText: 'Button'
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const SkipFocus = () =>
  class SkipFocusExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          items: Array.apply(null, { length: 50 }).map((_, i) => {
            if (i % 4 === 0)
              return {
                type: Title,
                titleText: 'Title',
                skipFocus: true
              };
            return { type: Button, buttonText: 'Button' };
          })
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const OnScreenEffect = () =>
  class OnScreenEffectExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          items: Array.apply(null, { length: 10 }).map((_, i) => {
            return {
              type: Button,
              buttonText: `Button ${i}`
            };
          })
        }
      };
    }

    _init() {
      this.tag('Column').onScreenEffect = items => {
        const { currentItem } = this.tag('Column');
        let focusIndex = items.findIndex(item => item === currentItem);
        if (focusIndex < 0) focusIndex = 0;

        for (let i = 1; i >= 0 && i < items.length; i++) {
          const prev = items[focusIndex - i];
          const next = items[focusIndex + i];
          if (prev) prev.setSmooth('alpha', 1 / (i * 1.5));
          if (next) next.setSmooth('alpha', 1 / (i * 1.5));
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

const rgb = (r, g, b) => {
  return (r << 16) + (g << 8) + b + 255 * 16777216;
};

export const RainbowScreenEffect = () =>
  class RainbowScreenEffectExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 55,
          items: Array.apply(null, { length: 10 }).map((_, i) => {
            return {
              type: Button,
              buttonText: `Button ${i}`
            };
          })
        }
      };
    }

    _init() {
      const colors = [
        rgb(255, 0, 0), // red
        rgb(255, 165, 0), // orange
        rgb(200, 200, 0), // yellow
        rgb(0, 128, 0), // green
        rgb(0, 0, 255), // blue
        rgb(75, 0, 130), // purple
        rgb(238, 130, 238) // pink
      ];

      this.tag('Column').onScreenEffect = items => {
        const { currentItem } = this.tag('Column');
        let focusIndex = items.findIndex(item => item === currentItem);
        if (focusIndex < 0) focusIndex = 0;
        for (let i = 1; i >= 0 && i < items.length; i++) {
          const prev = items[focusIndex - i];
          const next = items[focusIndex + i];
          if (prev) prev.setSmooth('color', colors[i - 1]);
          if (next) next.setSmooth('color', colors[i - 1]);
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

class ExpandingButton extends Button {
  _focus() {
    super._focus();
    this.patch({ h: 100 });
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}
