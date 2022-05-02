import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    borderWidth: theme.spacing(0.5),
    colorTransitionAlpha: theme.alphas.secondary,
    radius: theme.radius.medium,
    spacing: theme.spacing(0.5),
    shouldAnimate: true,
    animationDuration: theme.animations.durationXSlow * 4
  };
}

export function variants(theme) {
  return {
    neutral: {
      color: theme.colors.coreNeutral,
      transitionColor: null,
      secondaryColor: theme.colors.coreNeutralTertiary
    },
    inverse: {
      color: theme.colors.coreInverse,
      transitionColor: null,
      secondaryColor: theme.colors.coreInverseTertiary
    },
    brand: {
      color: theme.colors.coreBrand,
      transitionColor: null,
      secondaryColor: theme.colors.coreBrandTertiary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
