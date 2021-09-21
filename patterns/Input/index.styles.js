export default theme => ({
  h: 64,
  background: theme.palette.background.float,
  shadow: theme.materials.glow,
  underline: {
    color: theme.palette.grey[5],
    weight: 4
  },
  cursor: {
    color: theme.palette.grey[5],
    blink: true,
    width: 4
  },
  iconProperties: {
    height: 32,
    width: 32,
    color: theme.palette.grey[5],
    focusColor: theme.palette.grey[90]
  },
  padding: {
    left: theme.spacing(2)
  },
  radius: theme.border.radius.small,
  text: {
    ...theme.typography.button1,
    textColor: theme.palette.grey[5]
  },
  label: {
    ...theme.typography.callout1,
    textColor: theme.palette.grey[5]
  },
  caption: {
    ...theme.typography.caption,
    textColor: theme.palette.text.light.tertiary
  },
  captionIcon: {
    width: 24,
    height: 24
  },
  focused: {
    background: { color: theme.palette.background.focus },
    text: { color: theme.palette.text.dark.primary },
    cursor: { color: theme.palette.text.dark.primary }
  }
});
