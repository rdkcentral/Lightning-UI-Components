import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    itemSpacing: theme.layout.gutterX.xsmall,
    scrollIndex: 0,
    alwaysScroll: false,
    neverScroll: false,
    itemTransition: {
      timingFunction: theme.animations.functionalStandard,
      delay: theme.animations.functionalStandardDelay,
      duration: theme.animations.functionalStandardDuration
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
