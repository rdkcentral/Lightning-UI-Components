export const base = theme => ({
  marginBottom: theme.spacer.xxxl,
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  pointerW: theme.spacer.xl,
  pointerH: theme.spacer.md + theme.spacer.xs,
  radius: theme.radius.md,
  textStyle: theme.typography.caption1,
  transition: theme.animation.utility // TODO: should delay and duration be xfast?
});

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.color.coreNeutral,
    textStyle: { textColor: theme.color.coreInverse }
  },
  inverse: {
    backgroundColor: theme.color.coreInverse,
    textStyle: { textColor: theme.color.coreNeutral }
  },
  brand: {
    backgroundColor: theme.color.coreBrand,
    textStyle: { textColor: theme.color.coreNeutral }
  }
});
