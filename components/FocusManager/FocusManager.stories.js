import lng from 'wpe-lightning';
import FocusManager from './FocusManager';

export default {
  title: 'FocusManager',
  component: FocusManager,
  decorators: [
    storyFn => {
      const options = { stage: { w: 1000, h: 500, clearColor: 0xff000000 } };
      const App = storyFn();
      const app = new App(options);

      return app.stage.getCanvas();
    }
  ]
};

export const Rows = () =>
  class RowExample extends lng.Application {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: FocusManager,
          direction: 'row',
          children: [
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
  class ColumnExample extends lng.Application {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: {
          type: FocusManager,
          direction: 'column',
          children: [
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
  class ColumnWithRowsExample extends lng.Application {
    static _template() {
      return {
        x: 20,
        y: 20,
        Column: Column({
          children: [Row(), Row({ y: 100 }), Row({ y: 200 })]
        })
      };
    }
    _getFocused() {
      return this.tag('Column');
    }
  };

function Row({ y = 0 } = {}) {
  return {
    type: FocusManager,
    direction: 'row',
    y,
    children: [
      { type: Button, buttonText: 'Left' },
      { x: 200, type: Button, buttonText: 'Center' },
      { x: 400, type: Button, buttonText: 'Right' }
    ]
  };
}

function Column({ children }) {
  return {
    type: FocusManager,
    direction: 'column',
    children
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
