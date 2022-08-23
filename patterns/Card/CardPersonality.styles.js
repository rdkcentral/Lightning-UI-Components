export const base = theme => ({
  descriptionTextProperties: {
    ...theme.typography.body3,
    textColor: theme.colors.coreNeutralSecondary,
    wordWrap: true,
    maxLines: 1
  },
  titleTextProperties: {
    ...theme.typography.headline3,
    wordWrapTrue: true,
    maxLines: 1,
    textColor: theme.colors.coreNeutral
  }
});
