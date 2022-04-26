export default theme => ({
  h: 8,
  w: 410,
  radius: theme.border.radius.xsmall,
  barColor: theme.palette.getHexColor(theme.palette.grey[5], 15),
  progressColor: theme.palette.getHexColor(theme.palette.grey[5], 100)
});
