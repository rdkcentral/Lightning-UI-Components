export default theme => ({
  title: theme.typography.headline1,
  subtitle: {
    ...theme.typography.button1,
    textColor: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary
  },
  margin: {
    x: theme.spacing(2)
  },
  padding: {
    y: theme.spacing(2)
  },
  wordWrapWidth: 410 - theme.spacing(4)
});
