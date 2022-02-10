export default theme => ({
  title: {
    text: {
      ...theme.typography.headline1
    }
  },
  subtitle: {
    text: {
      ...theme.typography.caption
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
