export const base = theme => ({
  marginBottom: theme.spacer.xxxl,
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  pointerW: theme.spacer.xl,
  pointerH: theme.spacer.md + theme.spacer.xs,
  radius: theme.radius.md,
  textStyle: {
    ...theme.typography.caption1,
    textColor: theme.color.textInverse
  },
  transition: theme.animation.utility // TODO: should delay and duration be xfast?
});

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textInverse }
  },
  inverse: {
    backgroundColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.textNeutral }
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    textStyle: { textColor: theme.color.textNeutral }
  }
});
