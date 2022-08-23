import lng from '@lightningjs/core';
import Surface from '.';
import mdx from './Surface.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Surface',
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
        Surface: {
          type: Surface,
          itemLayout: {
            ratioX: 16,
            ratioY: 9,
            upCount: 3
          }
        }
      };
    }
  };

Basic.argTypes = createModeControl();
