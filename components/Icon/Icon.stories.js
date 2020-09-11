import lng from 'wpe-lightning';

import Icon from '.';
import circle from '../../assets/images/circle.svg';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Icon.mdx';

export default {
  title: 'Icon',
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
        Icon: {
          type: Icon,
          w: 50,
          h: 50,
          icon: circle
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };

export const InlineSvg = () =>
  class InlineSvg extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: 50,
          h: 50,
          icon:
            '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>'
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };

export const PNG = () =>
  class PNG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: 32,
          h: 32,
          icon: lightning
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };
