export const base = theme => ({
  h: theme.spacer.md,
  animation: theme.animation.utility,
  radius: theme.radius.xs
});

export const palette = theme => ({
  neutral: {
    barColor: theme.color.coreNeutralTertiary,
    progressColor: theme.color.coreNeutral
  },
  inverse: {
    barColor: theme.color.coreInverseTertiary,
    progressColor: theme.color.coreInverse
  },
  brand: {
    barColor: theme.color.coreBrandTertiary,
    progressColor: theme.color.coreBrand
  }
});
