export const base = theme => ({
  radius: [
    theme.radius.md,
    theme.radius.md,
    theme.radius.md,
    theme.radius.none
  ],
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  offsetY: theme.spacer.xxs,
  textStyle: theme.typography.caption1
});

export const tone = theme => ({
  neutral: {
    textStyle: { textColor: theme.color.textInverse },
    backgroundColor: theme.color.fillNeutral
  },
  inverse: {
    textStyle: { textColor: theme.color.textNeutral },
    backgroundColor: theme.color.fillInverse
  },
  brand: {
    textStyle: { textColor: theme.color.textNeutral },
    backgroundColor: theme.color.fillBrand
  }
});
