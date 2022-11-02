export const base = theme => ({
  h: theme.spacer.md,
  animation: theme.animation.utility,
  radius: theme.radius.xs
});

export const palette = theme => ({
  neutral: {
    barColor: theme.color.fillNeutralTertiary,
    progressColor: theme.color.fillNeutral
  },
  inverse: {
    barColor: theme.color.fillInverseTertiary,
    progressColor: theme.color.fillInverse
  },
  brand: {
    barColor: theme.color.fillBrandTertiary,
    progressColor: theme.color.fillBrand
  }
});
