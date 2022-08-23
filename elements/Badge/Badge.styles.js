export const base = theme => ({
  contentSpacing: theme.spacer.sm,
  paddingX: theme.spacer.md,
  paddingY: theme.spacer.xs,
  radius: theme.radius.sm,
  textAlign: 'center',
  textStyle: theme.typography.caption
});

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.colors.coreInverseSecondary,
    iconColor: theme.colors.coreNeutral,
    textStyle: { textColor: theme.colors.coreNeutral }
  },
  inverse: {
    backgroundColor: theme.colors.coreNeutralSecondary,
    iconColor: theme.colors.coreInverse,
    textStyle: { textColor: theme.colors.coreInverse }
  },
  brand: {
    backgroundColor: theme.colors.coreBrand,
    iconColor: theme.colors.coreNeutral,
    textStyle: { textColor: theme.colors.coreNeutral }
  }
});
