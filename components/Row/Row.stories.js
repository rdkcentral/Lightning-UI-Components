import lng from 'wpe-lightning';
import { number, withKnobs, boolean } from '@storybook/addon-knobs';

import Row from '.';
import mdx from './Row.mdx';
import Pivot from '../Pivot';

export default {
  title: 'Row',
  component: Row,
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
        x: 20,
        y: 20,
        Row: {
          type: Row,
          w: 900,
          itemSpacing: 100,
          items: [
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

const numberOptions = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
};

export const SideScrolling = () =>
  class SideScrolling extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: Row,
          w: 900,
          itemSpacing: 20,
          alwaysScroll: boolean('alwaysScroll', false),
          scrollMount: number('scrollMount', 0.5, numberOptions),
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`,
            w: 150
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const FocusHeightChange = () =>
  class FocusHeightChange extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: Row,
          items: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: ExpandingHeightButton,
            buttonText: 'Button',
            w: 150,
            h: 75
          })),
          itemSpacing: 20,
          focusHeightChange: 75
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const VaryingItemWidth = () =>
  class VaryingItemWidth extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: Row,
          itemSpacing: 20,
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            buttonText: 'Button',
            w: 120 + Math.floor(Math.random() * 80)
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const ExpandableWidth = () =>
  class ExpandableWidth extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: Row,
          itemSpacing: 20,
          items: [
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

class ExtendedRow extends Row {
  static _template() {
    return {
      ...super._template(),
      Title: {
        text: {
          x: 0,
          y: 0
        }
      },
      Items: {
        y: 60
      }
    };
  }

  set title(val) {
    this.Title.text = val;
  }

  get title() {
    return this.Title.text;
  }

  get Title() {
    return this.tag('Title');
  }
}

export const ExtendingRow = () =>
  class ExtendingRow extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: ExtendedRow,
          itemSpacing: 20,
          title: 'My Button Row',
          items: [
            { type: Button, buttonText: 'Button 1', w: 150 },
            { type: Button, buttonText: 'Button 2', w: 150 },
            { type: Button, buttonText: 'Button 3', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const WithPivots = () =>
  class WithPivots extends lng.Component {
    static _template() {
      return {
        x: 20,
        y: 20,
        Row: {
          type: Row,
          w: 900,
          itemSpacing: 100,
          items: [
            { type: Pivot, title: 'Pivot 1' },
            { type: Pivot, title: 'Long Pivot Title' },
            { type: Pivot, title: 'Pivots adjust width to title' }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

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
        text: { textAlign: 'center', fontSize: 20 }
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
    this.patch({ w: 200 });
  }

  _unfocus() {
    super._unfocus();
    this.patch({ w: 150 });
  }
}

class ExpandingHeightButton extends Button {
  _focus() {
    super._focus();
    this.setSmooth('h', 150, { duration: 1 });
  }

  _unfocus() {
    super._unfocus();
    this.setSmooth('h', 75, { duration: 1 });
  }
}
