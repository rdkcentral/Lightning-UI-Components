export default theme => ({
  background: {
    color: theme.palette.background.float
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.headline1,
    color: theme.palette.text.light.primary
  },
  shadow: theme.materials.glow,
  icon: {
    color: theme.palette.text.light.primary,
    size: 32,
    spacing: theme.spacing(2)
  },
  sizes: {
    small: 60,
    medium: 128,
    large: 196,
    xlarge: 400
  },
  focused: {
    background: { color: theme.palette.background.focus },
    icon: { color: theme.palette.text.dark.primary },
    text: { color: theme.palette.text.dark.primary }
  }
});
