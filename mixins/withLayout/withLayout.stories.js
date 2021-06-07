import lng from '@lightningjs/core';
import withLayout from '.';
import mdx from './withLayout.mdx';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';

import withMetadata from '../../patterns/withMetadata';
import { Column } from '../../layout';
import { MetadataTile } from '../../elements';

export default {
  title: 'Mixins/withLayout',
  parameters: {
    docs: {
      page: mdx
    },
    stage: { w: 800, h: 600 }
  }
};

export const Basic = args => {
  return class Basic extends lng.Component {
    static _template() {
      return {
        Wrapper: {
          type: lng.Component,
          h: 600,
          w: 800,
          Column: {
            h: 600,
            type: Column,
            itemSpacing: 100,
            items: [
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  w: args.w,
                  h: args.h
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: `${args.h || 'default'} height, ${
                    args.w || 'default'
                  } width`
                }
              },
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h,
                  ratioX: args.ratioX,
                  ratioY: args.ratioY
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: ` ${args.h || 'default'} height, ${args.ratioX}X${
                    args.ratioY
                  }`
                }
              },
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  ratioX: args.ratioX,
                  ratioY: args.ratioY,
                  upCount: args.upCount
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: `${args.ratioX}X${args.ratioY}, ${args.upCount} upCount`
                }
              },
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h,
                  upCount: args.upCount
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: `${args.h || 'default'} height, ${
                    args.upCount
                  } upCount`
                }
              },
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: `${args.h || 'default'} height only`
                }
              },
              {
                type: withLayout(withMetadata()),
                src: parks,
                w: 320,
                h: 180,
                itemLayout: {
                  w: args.w
                },
                Metadata: {
                  type: MetadataTile,
                  firstLine: `${args.w || 'default'} width only`
                }
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Wrapper.Column');
    }
  };
};

Basic.args = {
  w: 340,
  h: 180,
  ratioX: 16,
  ratioY: 9,
  upCount: 4
};

Basic.argTypes = {
  w: { control: 'number' },
  h: { control: 'number' },
  ratioX: { control: 'number' },
  ratioY: { control: 'number' },
  upCount: { control: 'number' }
};
