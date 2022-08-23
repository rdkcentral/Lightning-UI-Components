export const base = theme => ({
  detailsTextProperties: theme.typography.body3,
  providerStyle: {
    fadeWidth: theme.spacer.md * theme.spacer.md,
    itemSize: theme.spacer.xxxl + theme.spacer.md
  }
});

export const palette = theme => ({
  neutral: {
    detailsTextProperties: {
      textColor: theme.colors.coreNeutral
    }
  },
  inverse: {
    detailsTextProperties: {
      textColor: theme.colors.coreInverse
    }
  },
  brand: {
    detailsTextProperties: {
      textColor: theme.colors.coreNeutral
    }
  }
});
