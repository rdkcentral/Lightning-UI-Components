export const base = theme => ({
  marginBottom: theme.spacer.xxxl,
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  pointerW: theme.spacer.xl,
  pointerH: theme.spacer.md + theme.spacer.xs,
  radius: theme.radius.md,
  textStyle: theme.typography.caption,
  transition: {
    timingFunction: theme.animations.functionalStandard,
    delay: theme.animations.delayXFast,
    duration: theme.animations.durationXFast
  }
});

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.colors.coreNeutral,
    textStyle: { textColor: theme.colors.coreInverse }
  },
  inverse: {
    backgroundColor: theme.colors.coreInverse,
    textStyle: { textColor: theme.colors.coreNeutral }
  },
  brand: {
    backgroundColor: theme.colors.coreBrand,
    textStyle: { textColor: theme.colors.coreNeutral }
  }
});
