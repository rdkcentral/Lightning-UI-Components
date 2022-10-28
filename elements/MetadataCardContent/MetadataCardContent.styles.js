export const base = theme => ({
  detailsTextStyle: theme.typography.body3,
  descriptionTextStyle: { maxLines: 3 },
  providerStyle: {
    fadeWidth: theme.spacer.md * theme.spacer.md,
    itemSize: theme.spacer.xxxl + theme.spacer.md
  }
});

export const palette = theme => ({
  neutral: {
    detailsTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled }
      }
    }
  },
  inverse: {
    detailsTextStyle: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled }
      }
    }
  },
  brand: {
    detailsTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        detailsTextStyle: { textColor: theme.color.textNeutralDisabled }
      }
    }
  }
});
