/**
 * Styles
 *
 * Contains global style information to easily maintain consistency throughout components.
 */
export * from './Layout';
export * from './Fonts';
export * from './Colors';
export * from './Transitions';
export { default as createStyles } from './createStyles';
export { default as createTheme, getXfinityTheme, getFocusScale } from './createTheme';

/**
 * Amount of rounding to add to corners based on the item's size
 */

export const CORNER_RADIUS = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24
};

export const ALPHA = {
  overlays: {
    background: 72,
    bubble: 56,
    shelf: 56
  },
  text: {
    primary: 100,
    secondary: 72,
    tertiary: 56,
    inactive: 40
  }
};

/**
 * Amount to blur shaders on components like the Shelf.
 *
 * The cap for Fast Blur component is 4, but Sketch files use "50"
 * The higher number is also necessary for when requesting a blurred version
 * of an image from a service using something like image magick.
 */
export const BLUR_AMOUNT = 4;
