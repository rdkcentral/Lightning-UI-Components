export const base = theme => ({
  descriptionTextProperties: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 1
  },
  titleTextProperties: {
    ...theme.typography.headline3,
    wordWrapTrue: true,
    maxLines: 1,
    textColor: theme.color.textNeutral
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextProperties: { textColor: theme.color.textNeutralDisabled }
  }
});
