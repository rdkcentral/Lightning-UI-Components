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
    textStyle: { textColor: theme.colors.material },
    backgroundColor: theme.colors.coreNeutral
  },
  inverse: {
    textStyle: { textColor: theme.colors.coreNeutral },
    backgroundColor: theme.colors.coreInverse
  },
  brand: {
    textStyle: { textColor: theme.colors.coreNeutral },
    backgroundColor: theme.colors.coreBrand
  }
});
