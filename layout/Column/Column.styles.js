import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    itemSpacing: theme.layout.gutterY.xsmall,
    scrollIndex: 0,
    itemTransition: {
      timingFunction: theme.animations.expressiveStandard,
      delay: theme.animations.expressiveStandardDelay,
      duration: theme.animations.expressiveStandardDuration
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
