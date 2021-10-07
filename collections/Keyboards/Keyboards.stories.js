import lng from '@lightningjs/core';

import mdx from './Keyboards.mdx';

import CollectionDocItem from '../CollectionDocItem';
import CollectionLabel from '../CollectionLabel';

import { Column } from '../../layout';

import Keyboard, { KEYBOARD_FORMATS } from '../../patterns/Keyboard';
import withStyles from '../../mixins/withStyles';

import Key from '../../elements/Key';
import KeyboardInput from '../../patterns/Keyboard/KeyboardInput';
import Row from '../../layout/Row';

export default {
  title: 'Collections / Keyboards',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const style = theme => {
  return {
    space: theme.spacing(4)
  };
};

export const Basic = () =>
  class Basic extends withStyles(lng.Component, style) {
    static _template() {
      return {
        Keyboards: {
          y: CollectionLabel.styles.h + 15,
          Column: {
            type: Column,
            alwaysScroll: true,
            itemSpacing: this.styles.space,
            items: [
              {
                type: CollectionLabel,
                title: 'Basic'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Keyboard,
                    defaultFormat: 'lowercase',
                    formats: KEYBOARD_FORMATS.qwerty,
                    h: 320
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Full Screen'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Keyboard,
                    defaultFormat: 'letters',
                    formats: KEYBOARD_FORMATS.fullscreen,
                    h: 120
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Inline'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Keyboard,
                    inline: true,
                    defaultFormat: 'numbers',
                    formats: KEYBOARD_FORMATS.numbers,
                    h: 50
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Dialpad'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Keyboard,
                    defaultFormat: 'dialpad',
                    formats: KEYBOARD_FORMATS.numbers,
                    h: 250
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Keys'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: Row,
                    itemSpacing: 20,
                    h: 50,
                    items: [
                      {
                        type: Key,
                        title: 'a'
                      },
                      {
                        type: Key,
                        size: 'medium',
                        title: 'Shift'
                      },
                      {
                        type: Key,
                        size: 'large',
                        title: 'Done'
                      },
                      {
                        type: Key,
                        size: 'xlarge',
                        title: 'Space'
                      }
                    ]
                  }
                ]
              },
              {
                type: CollectionLabel,
                title: 'Keyboard with input'
              },
              {
                type: CollectionDocItem,
                items: [
                  {
                    type: KeyboardInput,
                    inputPlaceholder: 'Search',
                    password: true,
                    mask: '*',
                    h: 480
                  }
                ]
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Keyboards.Column');
    }
  };
Basic.args = {};
Basic.argTypes = {};
Basic.parameters = {
  argActions: {}
};
