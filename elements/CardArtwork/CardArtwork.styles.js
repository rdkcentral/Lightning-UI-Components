export default theme => ({
  blurBackgroundColor: theme.palette.getHexColor(
    theme.palette.grey[90],
    theme.palette.opacity[3]
  ),
  blur: 4,
  padding: theme.spacing(2)
});
