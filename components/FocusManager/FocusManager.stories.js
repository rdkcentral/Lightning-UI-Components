/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import lng from '@lightningjs/core';
import FocusManager from '.';
import mdx from './FocusManager.mdx';
import withSelections from '../../mixins/withSelections';

export default {
  title: 'layout / FocusManager',
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
        Row: {
          type: withSelections(FocusManager),
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
    if (this.selected) {
      this.color = 0xfff1f1f1;
      this.tag('Label').color = 0xff1f1f1f;
    } else {
      this.color = 0xff1f1f1f;
      this.tag('Label').color = 0xffffffff;
    }
  }

  get selected() {
    return this._selected;
  }

  set selected(v) {
    if (v !== this._selected) {
      this._selected = v;
      if (!v) {
        this.color = 0xff1f1f1f;
        this.tag('Label').color = 0xffffffff;
      }
    }
  }
}
