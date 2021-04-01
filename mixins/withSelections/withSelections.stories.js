import lng from '@lightningjs/core';
import Button from '../../elements/Button';
import FocusManager from '../../layout/FocusManager';
import withSelections from '.';
import mdx from './withSelections.mdx';

export default {
  title: 'Mixins/withSelections',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
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

  return class Example extends lng.Component {
    static _template() {
      return {
        Title: {
          text: {}
        },
        Items: {
          type: withSelections(FocusManager),
          y: 100,
          direction: 'row',
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
        }
      };
    }
    _firstEnable() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
    _getFocused() {
      return this.tag('Items');
    }
    $onSelect() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
  };
};
