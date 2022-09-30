export const base = theme => ({
  animationDuration: theme.animation.duration.xslow * 4,
  borderWidth: theme.stroke.md,
  colorTransitionAlpha: theme.alpha.secondary,
  radius: theme.radius.md,
  spacing: theme.spacer.xs,
  shouldAnimate: true
});

export const palette = theme => ({
  neutral: {
    color: theme.color.coreNeutral,
    transitionColor: null,
    secondaryColor: theme.color.coreNeutralTertiary
  },
  inverse: {
    color: theme.color.coreInverse,
    transitionColor: null,
    secondaryColor: theme.color.coreInverseTertiary
  },
  brand: {
    color: theme.color.coreBrand,
    transitionColor: null,
    secondaryColor: theme.color.coreBrandTertiary
  }
});
