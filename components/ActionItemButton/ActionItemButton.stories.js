import lng from 'wpe-lightning';
// import { withKnobs, boolean } from "@storybook/addon-knobs";

import ActionItemButton from '.';
import mdx from './ActionItemButton.mdx';

export default {
  title: 'ActionItemButton',
  component: ActionItemButton,
  // decorators: [withKnobs],
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
        ActionItemButton: {
          title: 'CLEAR',
          type: ActionItemButton,
          w: 410,
          h: 72
        }
      };
    }

    _getFocused() {
      return this.tag('ActionItemButton');
    }
  };
