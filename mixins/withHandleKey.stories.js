import lng from 'wpe-lightning';
import Tile from '../components/Tile';
import Row from '../components/Row';
import mdx from './withHandleKey.mdx';
import kabob from '../assets/images/kabob_320x180.jpg';

export default {
  title: 'Mixins/withHandleKey',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = args =>
  class Base extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onEnter: args.onEnter
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowDown: args.onArrowDown
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowUp: args.onArrowUp
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowRight: args.onArrowRight
            }
          ]
        }
      };
    }

  $onEnter(keyEvent, tile) {
    args.onEnter();
  }

  _getFocused() {
    return this.tag('Row');
  }
}

Base.argTypes = {
  onEnter: { action: 'You hit Enter' },
  onArrowUp: { action: 'You hit ArrowUp' },
  onArrowDown: { action: 'You hit ArrowDown' },
  onArrowRight: { action: 'You hit ArrowRight' }
};
