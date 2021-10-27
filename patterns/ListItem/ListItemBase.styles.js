export default theme => ({
  h: 96,
  backgrounds: theme.palette.background,
  backgroundType: 'fill',
  dimensions: {
    large: 860,
    small: 410
  },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  strokeWidth: 2,
  radius: theme.border.radius.small,
  focused: {
    scale: theme.getFocusScale
  },
  unfocused: {
    scale: () => 1
  },
  shadow: theme.materials.glow
});
