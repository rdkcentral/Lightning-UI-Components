import lng from 'wpe-lightning';
import { button, withKnobs, number } from '@storybook/addon-knobs';
import Column from '.';
import FocusManager from '../FocusManager';
import Row from '../Row';
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

const numberOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
};

const itemSpacingOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 5
};

export const Basic = () =>
  class Scrolling extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          h: 500,
          itemSpacing: number('itemSpacing', 20, itemSpacingOptions),
          scrollMount: number('scrollMount', 0, numberOptions),
          items: Array.apply(null, { length: 20 }).map((_, i) => ({
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
      // Setup Knobs in storybook
      button('Button 1', () => !!column.scrollTo(0, transition));
      button('Button 5', () => !!column.scrollTo(4, transition));
      button('Button 10', () => !!column.scrollTo(9, transition));
      button('Button 15', () => !!column.scrollTo(14, transition));
      button('Button 20', () => !!column.scrollTo(19, transition));
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const TestCase = () =>
  class TestCase extends lng.Component {
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

export const MultiColumn = () =>
  class MultiColumn extends lng.Component {
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
  class Provider extends lng.Component {
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
          itemSpacing: 30,
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

export const Plinko = () =>
  class Plinko extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
          plinko: true,
          items: [
            {
              type: Row,
              h: 40,
              w: 900,
              itemSpacing: 20,
              items: Array.apply(null, { length: 3 }).map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            },
            {
              type: Row,
              h: 40,
              w: 900,
              itemSpacing: 20,
              items: Array.apply(null, { length: 3 }).map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const VaryingItemHeight = () =>
  class VaryingItemHeight extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          h: 500,
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
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
          items: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: ExpandingButton,
            h: 40,
            w: 150,
            buttonText: 'Button'
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ExpandableHeightRows = () =>
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
          items: Array.apply(null, { length: 3 }).map((_, i) => ({
            type: ExpandingRow,
            y: 50 * i,
            h: 40,
            items: [
              { type: ExpandingButton, buttonText: 'Button', w: 150 },
              { type: ExpandingButton, buttonText: 'Button', w: 150 },
              { type: ExpandingButton, buttonText: 'Button', w: 150 }
            ]
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const SkipFocus = () =>
  class SkipFocus extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 30,
          items: Array.apply(null, { length: 50 }).map((_, i) => {
            if (i % 4 === 0)
              return {
                type: Title,
                titleText: 'Skip Focus Text',
                h: 30,
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
  class OnScreenEffect extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          h: 430,
          itemSpacing: 45,
          scrollMount: 0.5,
          items: Array.apply(null, { length: 20 }).map((_, i) => {
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
        const { selectedIndex } = this.tag('Column');

        if (selectedIndex < 3 || selectedIndex > 16) {
          items.forEach(item => (item.alpha = 1));
          return;
        }

        let mid = parseInt(items.length / 2);
        items[mid].setSmooth('alpha', 1);
        items.slice(0, mid).forEach((item, i) => {
          item.setSmooth('alpha', 1 / (i * 1.5));
        });

        items.slice(mid + 1).forEach((item, i) => {
          item.setSmooth('alpha', 1 / (i * 1.5));
        });
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
  class RainbowScreenEffect extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: Column,
          itemSpacing: 20,
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
        items.forEach((item, i) => {
          if (!item.hasFocus()) {
            item.patch({ color: colors[i] });
          }
        });
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const StickyTitle = () => {
  const items = Array.apply(null, { length: 5 })
    .map((_, i) => {
      const headerText = `Sticky Header ${i}`;
      let items = Array.apply(null, { length: 8 }).map((_, i) => {
        return {
          type: Button,
          buttonText: `Button ${i + 1}`,
          headerText
        };
      });

      return [
        {
          type: ColumnHeader,
          headerText,
          skipFocus: true
        },
        ...items
      ];
    })
    .flat();
  items.shift();

  return class ColumnExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        h: 450,
        w: 200,
        ColumnHeader: {
          type: ColumnHeader,
          h: 40
        },
        Column: {
          y: 50,
          w: 200,
          h: 400,
          itemSpacing: 50,
          clipping: true,
          type: Column,
          items,
          signals: {
            selectedChanged: '_updateHeader'
          }
        }
      };
    }

    _updateHeader(selected) {
      this.tag('ColumnHeader').headerText = selected.headerText || '';
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
};

class ColumnHeader extends lng.Component {
  static _template() {
    return {
      Label: {
        x: 5,
        y: 10,
        text: {
          text: 'Sticky Header',
          fontSize: 24,
          textColor: 0xffffffff
        },
        zIndex: 2
      },
      Line: {
        color: 0xffffff1f,
        rect: true,
        w: 300,
        y: 35,
        h: 3
      }
    };
  }

  set headerText(val) {
    this.tag('Label').text = val;
  }
}

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
      h: 40,
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

class ExpandingRow extends Row {
  _focus() {
    super._focus();
    this.patch({ h: 100 });
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}
