import lng from '@lightningjs/core';
import Key from '.';
import icon from '../../assets/images/ic_lightning_white_32.png';

// TODO: add mdx
// import mdx from './Key.mdx';

export default {
  title: 'Elements / Key',
  component: Key
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Key: {
          type: Key
        }
      };
    }
  };

Basic.args = {
  char: 'A'
};

export const Icon = () =>
  class Icon extends lng.Component {
    static _template() {
      return {
        Key: {
          label: 'Label',
          type: Key,
          icon: {
            src: icon
          }
        }
      };
    }
  };
