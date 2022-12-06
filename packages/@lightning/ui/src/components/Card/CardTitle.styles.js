export const base = theme => ({
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  },
  detailsTextProperties: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutral,
    wordWrap: true,
    maxLines: 1
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextProperties: { textColor: theme.color.textNeutralDisabled },
    detailsTextProperties: { textColor: theme.color.textNeutralDisabled }
  }
});
