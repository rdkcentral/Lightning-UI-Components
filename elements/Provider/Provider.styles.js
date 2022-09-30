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
    counterBackgroundColor: theme.color.coreInverseSecondary
  },
  inverse: {
    counterBackgroundColor: theme.color.coreNeutralSecondary
  },
  brand: {
    counterBackgroundColor: theme.color.coreInverseSecondary
  }
});
