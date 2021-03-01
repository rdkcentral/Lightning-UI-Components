import lng from '@lightningjs/core';
import { clone } from '../../utils';
import { CORNER_RADIUS, getFocusScale } from './Styles';
import { PALETTE, getHexColor } from '../Styles/Colors';
import { TYPOGRAPHY } from '../Styles/Fonts';

function glow({
  w,
  h,
  color = 0xffffffff,
  borderRadius = CORNER_RADIUS.small,
  blur = spacing(2)
}) {
  return {
    color: color,
    mount: 0.5,
    x: w / 2,
    y: h / 2 + blur / 2,
    zIndex: 1,
    texture: lng.Tools.getShadowRect(
      w - spacing(2),
      h - spacing(2),
      borderRadius,
      blur
    )
  };
}

function luminance({
  w,
  h,
  blur = 3,
  padding = spacing(8),
  texture = null,
  radius = 0
}) {
  let shader = {};

  if (radius) {
    radius = {
      type: lng.shaders.RoundedRectangle,
      radius
    };
  }

  return {
    type: lng.components.FastBlurComponent,
    x: w / 2,
    y: h / 2 + spacing(3),
    mount: 0.5,
    w,
    h,
    amount: blur,
    padding: padding,
    content: {
      Image: {
        w,
        h,
        texture: texture,
        shader
      }
    },
    zIndex: 1
  };
}

function shadow({
  w,
  h,
  color = 0xff000000,
  borderRadius = CORNER_RADIUS.small,
  blur = spacing(2)
}) {
  return {
    color: color,
    mount: 0.5,
    x: w / 2,
    y: h / 2,
    zIndex: 1,
    texture: lng.Tools.getShadowRect(
      w - spacing(2),
      h - spacing(2),
      borderRadius,
      blur
    )
  };
}

const materials = {
  glow,
  luminance,
  shadow
};

function spacing(multiplier) {
  return 8 * multiplier;
}

const gradientColor = PALETTE.grey[5];
const gradientAnimation = {
  duration: 0.6,
  actions: [
    {
      p: 'colorUl',
      v: {
        0: getHexColor(gradientColor, 72),
        1: getHexColor(gradientColor, 56)
      }
    },
    {
      p: 'colorUr',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    },
    {
      p: 'colorBr',
      v: { 0: 0x00, 1: getHexColor(gradientColor, 0) }
    },
    {
      p: 'colorBl',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    }
  ]
};

const SIZES = {
  icon: {
    small: 32,
    medium: 40,
    large: 48
  }
};

export const getXfinityTheme = () => ({
  getFocusScale,
  spacing,
  materials,
  palette: PALETTE,
  sizes: SIZES,
  typography: TYPOGRAPHY,
  border: {
    focused: {
      width: 2
    },
    radius: CORNER_RADIUS
  },
  animations: {
    gradient: gradientAnimation
  }
});

/**
 * Combines two theme objects to create a new theme
 * @param {Object|function} theme - An object or callback that accepts the default theme as an argument. Gets merged with the default theme
 * @param {Object} [defaultTheme] - Theme to be merged with. Defaults to the Xfinity theme
 */
export default (theme, defaultTheme = getXfinityTheme()) => {
  if (typeof theme === 'function') {
    return clone(defaultTheme, theme(defaultTheme));
  }

  return clone(defaultTheme, theme);
};
