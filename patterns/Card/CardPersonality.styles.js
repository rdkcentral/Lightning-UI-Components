export const base = theme => ({
  descriptionTextStyle: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutralSecondary,
    wordWrap: true,
    maxLines: 1
  },
  titleTextStyle: {
    ...theme.typography.headline3,
    wordWrapTrue: true,
    maxLines: 1,
    textColor: theme.color.textNeutral
  }
});

export const mode = theme => ({
  disabled: {
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});
