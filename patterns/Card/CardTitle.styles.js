export const base = theme => ({
  descriptionTextProperties: {
    ...theme.typography.body2,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 3
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextProperties: { textColor: theme.color.textNeutralDisabled }
  }
});
