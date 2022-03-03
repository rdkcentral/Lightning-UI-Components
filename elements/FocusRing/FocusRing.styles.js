import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    borderWidth: theme.spacing(0.5),
    colorTransitionAlpha: theme.alphas.secondary,
    radius: theme.radius.medium,
    spacing: theme.spacing(1.5),
    shouldAnimate: true,
    animationDuration: theme.animations.durationXSlow * 4
  };
}

export function variants(theme) {
  return {
    neutral: {
      color: theme.colors.fillNeutral1,
      transitionColor: null,
      secondaryColor: theme.colors.fillNeutral1Tertiary
    },
    inverse: {
      color: theme.colors.fillInverse1,
      transitionColor: null,
      secondaryColor: theme.colors.fillInverse1Tertiary
    },
    brand: {
      color: theme.colors.fillBrand,
      transitionColor: null,
      secondaryColor: theme.colors.fillBrandTertiary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
