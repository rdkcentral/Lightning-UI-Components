export const base = theme => ({
  descriptionTextStyle: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});
