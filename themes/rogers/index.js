import xfinity from '../xfinity';
import color from './color';
import radius from './radius';
import typography from './typography';
import font from './font';

export default {
  ...xfinity,
  name: 'Rogers',
  color,
  font,
  radius,
  typography,
  componentPalette: {
    ProgressBar: 'brand',
    FocusRing: 'brand',
    Distractor: 'brand',
    Wave: 'brand'
  }
};
