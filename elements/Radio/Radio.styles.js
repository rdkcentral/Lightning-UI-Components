export default theme => ({
  w: 32,
  h: 32,
  radius: 16,
  background: { color: theme.palette.background.default },
  stroke: { color: theme.palette.grey[5], width: 4 },
  knob: { color: theme.palette.grey[5], h: 16, w: 16 }
});
