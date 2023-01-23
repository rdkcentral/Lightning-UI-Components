import lng from '@lightningjs/core';
import { Button, Row } from '../../components/index.js';
import withSelectionsMixin from './index.js';
import mdx from './withSelections.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/withSelections`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withSelections = () => {
  class UnderlineButton extends Button {
    get isSelected() {
      return this._isSelected;
    }

    set isSelected(v) {
      this._whenEnabled.then(() => {
        if (v !== this._isSelected) {
          this._isSelected = v;
          if (v) {
            this.patch({
              Line: {
                rect: true,
                color: 0xffffffff,
                w: w => w,
                h: 4,
                y: 50
              }
            });
          } else {
            this.patch({
              Line: undefined
            });
          }
        }
      });
    }
  }

  return class withSelections extends lng.Component {
    static _template() {
      return {
        Items: {
          type: withSelectionsMixin(Row),
          y: 100,
          items: [
            {
              type: UnderlineButton,
              title: 'Left'
            },
            {
              type: UnderlineButton,
              title: 'Center',
              x: 150
            },
            {
              type: UnderlineButton,
              title: 'Right',
              x: 312
            }
          ]
        },
        Title: {
          text: {}
        }
      };
    }

    _firstEnable() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }

    $onSelect() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
  };
};

withSelections.storyName = 'withSelections';
