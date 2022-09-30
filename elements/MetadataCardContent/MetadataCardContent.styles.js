export const base = theme => ({
  detailsTextProperties: theme.typography.body3,
  providerStyle: {
    fadeWidth: theme.spacer.md * theme.spacer.md,
    itemSize: theme.spacer.xxxl + theme.spacer.md
  }
});

export const palette = theme => ({
  neutral: {
    detailsTextProperties: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextProperties: { textColor: theme.color.textNeutralDisabled }
      }
    }
  },
  inverse: {
    detailsTextProperties: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        detailsTextProperties: { textColor: theme.color.textNeutralDisabled }
      }
    }
  },
  brand: {
    detailsTextProperties: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextProperties: { textColor: theme.color.textNeutralDisabled }
      }
    }
  }
});
