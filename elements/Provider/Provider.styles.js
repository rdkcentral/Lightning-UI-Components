export function base(theme) {
  return {
    counterTextProperties: theme.typography.headline3,
    itemSize: theme.layout.gutterX.sm,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm
  };
}

export const palette = theme => ({
  neutral: {
    counterBackgroundColor: theme.colors.coreInverseSecondary
  },
  inverse: {
    counterBackgroundColor: theme.colors.coreNeutralSecondary
  },
  brand: {
    counterBackgroundColor: theme.colors.coreInverseSecondary
  }
});
