export default theme => ({
  iconW: 36,
  iconH: 36,
  contentSpacing: theme.spacing(1),
  contentProperties: {
    marginBottom: theme.typography.body1.lineHeight / -10
  },
  textProperties: {
    ...theme.typography.body1,
    textColor: theme.palette.text.light.secondary,
    maxLines: 1
  },
  justify: 'center'
});
