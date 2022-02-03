import lng from '@lightningjs/core';
import { rgba2argb } from '../../utils';
import TileIcon from '.';
import Row from '../../layout/Row';
import mdx from './TileIcon.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import circleSVG from '../../assets/images/circle.svg';
import blacktile from '../../Styles/assets/black_background_tile.png';

export default {
  title: 'Elements / TileIcon',
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
        TileIcon: {
          type: TileIcon,
          src: blacktile,
          icon: lightning,
          w: 320,
          h: 180,
          iconColor: rgba2argb(args.iconColor),
          iconW: args.iconW,
          iconH: args.iconH,
          blur: args.blur,
          radius: args.radius
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TileIcon');
      }
    }
  };
Basic.args = {
  iconColor: 'rgba(255,255,255,1)',
  iconW: 50,
  iconH: 50,
  radius: 16
};
Basic.argTypes = {
  iconColor: {
    control: 'color'
  },
  iconW: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  iconH: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  focused: { control: 'boolean' },
  radius: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5
    }
  }
};
Basic.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TileIcon')
        : () => {};
      component._refocus();
    }
  }
};

export const XfinityTheme = () =>
  class Basic extends lng.Component {
    static _template() {
      const tileIcon = {
        type: TileIcon,
        src: blacktile,
        icon: lightning,
        w: 320,
        h: 180,
        radius: 16
      };
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [tileIcon, tileIcon, tileIcon]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const BasicSVG = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        TileIcon: {
          type: TileIcon,
          src: blacktile,
          icon: circleSVG,
          w: 320,
          h: 180,
          iconColor: rgba2argb(args.iconColor),
          iconW: args.iconW,
          iconH: args.iconH,
          blur: args.blur,
          radius: args.radius
        }
      };
    }

    _getFocused() {
      if (args.focused) {
        return this.tag('TileIcon');
      }
    }
  };
BasicSVG.args = {
  iconColor: 'rgba(255,255,255,1)',
  iconW: 50,
  iconH: 50,
  radius: 16
};
BasicSVG.argTypes = {
  iconColor: {
    control: 'color'
  },
  iconW: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  iconH: {
    control: {
      type: 'range',
      min: 1,
      step: 5
    }
  },
  focused: { control: 'boolean' },
  radius: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5
    }
  }
};
BasicSVG.parameters = {
  argActions: {
    focused: (isFocused, component) => {
      component._getFocused = isFocused
        ? () => component.tag('TileIcon')
        : () => {};
      component._refocus();
    }
  }
};

export const XfinityThemeSVG = () =>
  class Basic extends lng.Component {
    static _template() {
      const tileIcon = {
        type: TileIcon,
        src: blacktile,
        icon: circleSVG,
        w: 320,
        h: 180,
        iconH: 48,
        iconW: 48,
        radius: 16
      };
      return {
        x: 60,
        y: 60,
        Row: {
          type: Row,
          itemSpacing: 60,
          items: [tileIcon, tileIcon, tileIcon]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
