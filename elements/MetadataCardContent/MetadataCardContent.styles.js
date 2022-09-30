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
      textColor: theme.color.coreNeutral
    }
  },
  inverse: {
    detailsTextProperties: {
      textColor: theme.color.coreInverse
    }
  },
  brand: {
    detailsTextProperties: {
      textColor: theme.color.coreNeutral
    }
  }
});
