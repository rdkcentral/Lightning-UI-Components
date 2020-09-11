import lng from 'wpe-lightning';

import FocusRing from '.';
import mdx from './FocusRing.mdx';
import kabob from '../../assets/images/kabob_320x180.jpg';

export default {
  args: {
    blur: 4,
    size: 16,
    shadowAlpha: 0.6,
    shadowBlur: 3,
    shadowPadding: 40
  },
  argTypes: {
    blur: {
      name: 'Blur',
      control: {
        type: 'range',
        min: 0,
        max: 4,
        step: 0.5
      }
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 0,
        max: 60,
        step: 2
      }
    },
    shadowAlpha: {
      name: 'Shadow Alpha',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    },
    shadowBlur: {
      name: 'Shadow Blur',
      control: {
        type: 'range',
        min: 0,
        max: 4,
        step: 0.5
      }
    },
    shadowPadding: {
      name: 'Shadow Padding',
      control: {
        type: 'range',
        min: 0,
        max: 60,
        step: 2
      }
    }
  },
  title: 'FocusRing',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          blur: args.blur,
          size: args.size,
          shadow: {
            padding: args.shadowPadding,
            blur: args.shadowBlur,
            alpha: args.shadowAlpha
          }
        }
      };
    }
  };

export const WithImage = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Kabob: {
          src: kabob,
          w: 320,
          h: 180,
          zIndex: 2
        },
        FocusRing: {
          type: FocusRing,
          w: 320,
          h: 180,
          imageSrc: kabob,
          blur: args.blur,
          size: args.size,
          shadow: {
            padding: args.shadowPadding,
            blur: args.shadowBlur,
            alpha: args.shadowAlpha
          }
        }
      };
    }
  };
