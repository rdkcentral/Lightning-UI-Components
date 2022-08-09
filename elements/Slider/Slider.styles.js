import { processThemeStyles } from '../../mixins/withThemeStyles';
import { getWidthByColumnSpan } from '../../utils';
export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacer.lg;
  return {
    arrowAlphaDisabled: 0,
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacer.lg,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.md,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    innerCircleSize: size,
    minWidth: getWidthByColumnSpan(2),
    progressBarStyles: {},
    radius: size / 2,
    sliderHeight: theme.spacer.md
  };
}

export function variants(theme) {
  return {
    neutral: {
      arrowColor: theme.colors.coreNeutral,
      circleColor: theme.colors.interactiveNeutralFocus
    },
    inverse: {
      arrowColor: theme.colors.coreInverse,
      circleColor: theme.colors.interactiveInverseFocus
    },
    brand: {
      arrowColor: theme.colors.coreInverse,
      circleColor: theme.colors.coreBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
