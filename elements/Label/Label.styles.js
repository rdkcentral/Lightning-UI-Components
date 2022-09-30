export const base = theme => ({
  radius: [
    theme.radius.md,
    theme.radius.md,
    theme.radius.md,
    theme.radius.none
  ],
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  textStyle: theme.typography.caption1
});

export const palette = theme => ({
  neutral: {
    textStyle: { textColor: theme.color.material },
    backgroundColor: theme.color.coreNeutral
  },
  inverse: {
    textStyle: { textColor: theme.color.coreNeutral },
    backgroundColor: theme.color.coreInverse
  },
  brand: {
    textStyle: { textColor: theme.color.coreNeutral },
    backgroundColor: theme.color.coreBrand
  }
});
