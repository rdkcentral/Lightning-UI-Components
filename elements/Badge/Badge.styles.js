export const base = theme => ({
  contentSpacing: theme.spacer.sm,
  paddingX: theme.spacer.md,
  paddingY: theme.spacer.xs,
  radius: theme.radius.sm,
  textAlign: 'center',
  textStyle: theme.typography.caption1
});

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.color.coreInverseSecondary,
    iconColor: theme.color.coreNeutral,
    textStyle: { textColor: theme.color.coreNeutral }
  },
  inverse: {
    backgroundColor: theme.color.coreNeutralSecondary,
    iconColor: theme.color.coreInverse,
    textStyle: { textColor: theme.color.coreInverse }
  },
  brand: {
    backgroundColor: theme.color.coreBrand,
    iconColor: theme.color.coreNeutral,
    textStyle: { textColor: theme.color.coreNeutral }
  }
});
