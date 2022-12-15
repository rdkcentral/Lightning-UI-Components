export const base = theme => ({
  contentSpacing: theme.spacer.sm,
  paddingX: theme.spacer.md,
  paddingY: theme.spacer.xs,
  offsetY: theme.spacer.xxs,
  radius: theme.radius.sm,
  textAlign: 'center',
  textStyle: theme.typography.caption1
});

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillInverseSecondary,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.fillNeutral }
  },
  inverse: {
    backgroundColor: theme.color.fillNeutralSecondary,
    iconColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.fillInverse }
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.fillNeutral }
  }
});
