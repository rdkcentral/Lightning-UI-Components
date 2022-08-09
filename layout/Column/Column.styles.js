import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    itemSpacing: theme.layout.gutterY.xs,
    scrollIndex: 0,
    itemTransition: {
      timingFunction: theme.animations.expressiveEntrance,
      delay: theme.animations.expressiveEntranceDelay,
      duration: theme.animations.expressiveEntranceDuration
    }
  };
}

export function variants() {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
