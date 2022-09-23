export const base = theme => ({
  animationDuration: theme.animations.durations.xslow * 4,
  borderWidth: theme.stroke.md,
  colorTransitionAlpha: theme.alphas.secondary,
  radius: theme.radius.md,
  spacing: theme.spacer.xs,
  shouldAnimate: true
});

export const palette = theme => ({
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
});
