import lng from 'wpe-lightning';
import { clone } from '../../utils';
import { CORNER_RADIUS, getFocusScale } from './Styles';
import { PALETTE } from '../Styles/Colors';
import { TYPOGRAPHY } from '../Styles/Fonts';

function shadow({
  w,
  h,
  color = 0xffffffff,
  borderRadius = CORNER_RADIUS.small,
  blur = spacing(2)
}) {
  const shadow = {
    borderRadius,
    blur,
    color,
    mount: 0.5,
    w: w - spacing(2),
    h: h - spacing(2),
    x: w / 2,
    y: h / 2 + blur / 2,
    zIndex: -1
  };

  return {
    color: shadow.color,
    mount: shadow.mount,
    x: shadow.x,
    y: shadow.y,
    zIndex: shadow.zIndex,
    texture: lng.Tools.getShadowRect(
      shadow.w,
      shadow.h,
      shadow.borderRadius,
      shadow.blur
    )
  };
}

function spacing(multiplier) {
  return 8 * multiplier;
}

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
  shadow,
  palette: PALETTE,
  sizes: SIZES,
  typography: TYPOGRAPHY,
  border: {
    focused: {
      width: 2
    },
    radius: CORNER_RADIUS
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
