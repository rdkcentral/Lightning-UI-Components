export default theme => ({
  title: {
    h: 48,
    text: {
      ...theme.typography.headline1,
      lineHeight: 48
    }
  },
  subtitle: {
    h: 24,
    text: {
      ...theme.typography.caption,
      lineHeight: 24
    }
  },
  logo: {
    h: 100,
    w: 100
  },
  margin: {
    x: theme.spacing(2),
    y: theme.spacing(2.5)
  },
  metadata: {
    h: 48,
    text: {
      ...theme.typography.headline2,
      textAlign: 'center'
    }
  },
  getFocusScale: theme.getFocusScale
});
