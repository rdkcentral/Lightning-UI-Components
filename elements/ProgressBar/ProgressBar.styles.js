export const base = theme => ({
  h: theme.spacer.md,
  animation: {
    timingFunction: theme.animations.functionalStandard,
    delay: theme.animations.functionalStandardDelay,
    duration: theme.animations.functionalStandardDuration
  },
  radius: theme.radius.xs
});

export const palette = theme => ({
  neutral: {
    barColor: theme.colors.coreNeutralTertiary,
    progressColor: theme.colors.coreNeutral
  },
  inverse: {
    barColor: theme.colors.coreInverseTertiary,
    progressColor: theme.colors.coreInverse
  },
  brand: {
    barColor: theme.colors.coreBrandTertiary,
    progressColor: theme.colors.coreBrand
  }
});
