export function base(theme) {
  return {
    counterTextStyle: theme.typography.headline3,
    itemSize: theme.layout.gutterX.sm,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm,
    alpha: 1
  };
}

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive
  }
});

export const tone = theme => ({
  neutral: {
    counterBackgroundColor: theme.color.fillInverseSecondary
  },
  inverse: {
    counterBackgroundColor: theme.color.fillNeutralSecondary
  },
  brand: {
    counterBackgroundColor: theme.color.fillInverseSecondary
  }
});
