import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import CarouselRow from '.';
import image from '../../assets/images/kabob_320x180.jpg';
import mdx from './CarouselRow.mdx';

class Box extends Base {
  static _template() {
    return {
      Box: {
        w: 320,
        h: 180,
        src: image,
        zIndex: 1
      }
    };
  }

  static get properties() {
    return ['count'];
  }

  _update() {
    this.patch({
      Active: {
        alpha: this.hasFocus() ? 1 : 0,
        rect: true,
        color: 0xfccffffff,
        w: this._w + 10,
        h: this._h + 10,
        x: this._w / 2,
        y: this._h / 2,
        rtt: true,
        mount: 0.5,
        zIndex: 0
      },
      Label: {
        x: 20,
        y: 20,
        text: {
          text: this._count + 1
        },
        zIndex: 2
      }
    });
  }
}

export default {
  title: 'Layout / CarouselRow',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        CarouselRow: {
          type: CarouselRow,
          itemSpacing: 20,
          carouselShiftTiming: args.carouselShiftTiming,
          carouselShiftDuration: args.carouselShiftDuration,
          items: new Array(5).fill().map((v, index) => ({
            w: 320,
            h: 180,
            type: Box,
            count: index
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('CarouselRow');
    }
  };
Basic.args = {};
Basic.argTypes = {
  carouselShiftTiming: {
    control: { type: 'number', min: 0, step: 1 }
  },
  carouselShiftDuration: {
    control: { type: 'number', min: 0, step: 1 }
  }
};
Basic.parameters = {
  argActions: {}
};
