export const base = theme => ({
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  },
  detailsTextStyle: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutral,
    wordWrap: true,
    maxLines: 1
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    detailsTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});
