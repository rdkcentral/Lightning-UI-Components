export default theme => ({
  shadow: theme.materials.glow,
  horizontalPadding: theme.spacing(2),
  radius: theme.border.radius.small,
  textProperties: {
    ...theme.typography.body3,
    textColor: theme.palette.text.dark.primary,
    textAlign: 'center',
    wordWrapWidth: 400
  },
  bottomMargin: theme.spacing(5)
});
