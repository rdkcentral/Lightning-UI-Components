import lng from '@lightningjs/core';
import { Tile, Row } from '../../components/index.js';
import { context } from '../../globals/index.js';
import kabob from '../../assets/images/kabob_320x180.jpg';
import mdx from './withHandleKey.mdx';
import withHandleKeyMixin from '.';
import { CATEGORIES } from 'lightning-ui-docs';

context.config({
  // Inspect console to see - should only be called when pressing enter on first tile.
  keyMetricsCallback: (key, p) => {
    // eslint-disable-next-line
    console.log('Metrics payload received', key, p);
  }
});

export default {
  title: `${CATEGORIES[512]}/withHandleKey`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withHandleKey = args => {
  class withHandleKey extends lng.Component {
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
              onEnter: args.onEnter,
              metricsPayload: {
                buttonName: 'enter button',
                uniqueId: 1
              }
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowDown: args.onArrowDown,
              metricsPayload: {
                buttonName: 'arrow down button',
                uniqueId: 2
              }
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowUp: args.onArrowUp,
              metricsPayload: {
                buttonName: 'arrow up button',
                uniqueId: 3
              }
            },
            {
              type: Tile,
              src: kabob,
              w: 320,
              h: 180,
              onArrowRight: args.onArrowRight,
              metricsPayload: {
                buttonName: 'arrow right button',
                uniqueId: 4
              }
            }
          ]
        }
      };
    }
    // eslint-disable-next-line no-unused-vars
    $onEnter(keyEvent, tile) {
      args.onEnter();
    }
  }
  return withHandleKeyMixin(withHandleKey);
};

withHandleKey.storyName = 'withHandleKey';

withHandleKey.args = {};

withHandleKey.argTypes = {};
