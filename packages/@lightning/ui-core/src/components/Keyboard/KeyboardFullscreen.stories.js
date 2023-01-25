import lng from '@lightningjs/core';
import mdx from './Keyboard.mdx';
import { CATEGORIES } from 'lightning-ui-docs';
import { context } from '../../globals';
import { utils } from '../../utils';
import { KeyboardFullscreen as KeyboardFullscreenComponent } from '@lightning/ui';
import { Keyboard } from './Keyboard.stories';

export default {
  title: `${CATEGORIES[8]}/KeyboardFullscreen`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const KeyboardFullscreen = () =>
  class KeyboardFullscreen extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardFullscreenComponent,
          defaultFormat: 'letters'
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }

    _init() {
      this.tag('Keyboard')._whenEnabled.then(() => {
        this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {
          row: 1,
          column: 0
        });
      });
    }
  };

KeyboardFullscreen.storyName = 'KeyboardFullscreen';
KeyboardFullscreen.parameters = {};
KeyboardFullscreen.argTypes = Keyboard.sharedArgTypes;
