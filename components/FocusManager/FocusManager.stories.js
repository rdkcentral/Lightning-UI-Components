import lng from 'wpe-lightning';
import FocusManager from '.';
import mdx from './FocusManager.mdx';

export default {
  title: 'FocusManager',
  component: FocusManager,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Rows = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: FocusManager,
          direction: 'row',
          items: [
            { type: Button, buttonText: 'Left' },
            { type: Button, buttonText: 'Center', x: 200 },
            { type: Button, buttonText: 'Right', x: 400 }
          ]
        }
      };
    }
    _getFocused() {
      return this.tag('Row');
    }
  };

export const WrapSelected = () =>
  class WrapSelectedExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Text: {
          y: 0,
          text: {
            fontSize: 20,
            text: 'Key in one direction a bunch of times'
          }
        },
        Row: {
          y: 50,
          type: FocusManager,
          direction: 'row',
          wrapSelected: true, // allows cycling through items
          items: [
            { type: Button, buttonText: 'Left' },
            { type: Button, buttonText: 'Center', x: 200 },
            { type: Button, buttonText: 'Right', x: 400 }
          ]
        }
      };
    }
    _getFocused() {
      return this.tag('Row');
    }
  };

export const Columns = () =>
  class ColumnExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: FocusManager,
          direction: 'column',
          items: [
            { type: Button, buttonText: 'Top' },
            { type: Button, buttonText: 'Middle', y: 100 },
            { type: Button, buttonText: 'Bottom', y: 200 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ColumnWithRows = () =>
  class ColumnWithRowsExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: Column({
          items: [Row(), Row({ y: 100 }), Row({ y: 200 })]
        })
      };
    }
    _getFocused() {
      return this.tag('Column');
    }
  };

class FancyFocus extends FocusManager {
  _init() {
    super._init();
    this.patch({
      Items: {
        x: 50
      }
    });
  }

  render() {
    this.selected.patch({
      texture: lng.Tools.getRoundRect(
        150,
        40,
        4,
        3,
        0xffff00ff,
        true,
        0xff00ffff
      )
    });
  }
}

export const ExtendedComponent = () =>
  class ExtendedComponentExample extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: FancyFocus,
          direction: 'row',
          items: [
            { type: Button, buttonText: 'Left' },
            { type: Button, buttonText: 'Center', x: 200 },
            { type: Button, buttonText: 'Right', x: 400 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

function Row({ y = 0 } = {}) {
  return {
    type: FocusManager,
    direction: 'row',
    y,
    items: [
      { type: Button, buttonText: 'Left' },
      { x: 200, type: Button, buttonText: 'Center' },
      { x: 400, type: Button, buttonText: 'Right' }
    ]
  };
}

function Column({ items }) {
  return {
    type: FocusManager,
    direction: 'column',
    items
  };
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
