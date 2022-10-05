import lng from '@lightningjs/core';
import Shadow from '.';
import mdx from './Shadow.mdx';
import { createModeControl } from '../../.storybook/controls/argTypes';

export default {
  title: 'Elements / Shadow',
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
        Shadow: {
          type: Shadow,
          w: 200,
          h: 200
        }
      };
    }
  };

const sharedArgs = {
  ...createModeControl({}, 'focused'),
  maskShadow: {
    control: 'boolean',
    defaultValue: false,
    description:
      'Enables a holepunch shader to mask out the component shape. Useful for transparent button states that should not show the shadow behind the element. However, requires an additional draw call for rtt.',
    type: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

Basic.argTypes = sharedArgs;

export const Masked = () =>
  class Masked extends lng.Component {
    static _template() {
      return {
        Shadow: {
          type: Shadow,
          w: 200,
          h: 200
        }
      };
    }
  };

const shadowParams = { ...sharedArgs.maskShadow };

Masked.argTypes = {
  ...sharedArgs,
  maskShadow: {
    ...shadowParams,
    defaultValue: true
  }
};
