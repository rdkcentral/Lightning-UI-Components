export default theme => ({
  minHeight: 120,
  w: 560,
  background: {
    color: theme.palette.background.fill
  },
  backgrounds: theme.palette.background,
  radius: theme.border.radius.small,
  margin: {
    x: theme.spacing(3),
    y: theme.spacing(3)
  },
  icon: {
    size: 64,
    spacing: theme.spacing(2)
  },
  title: {
    ...theme.typography.headline3,
    lineHeight: theme.typography.headline3.lineHeight + 6,
    color: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    lineHeight: theme.typography.body3.lineHeight + 4,
    textColor: theme.palette.text.light.secondary
  },
  actionArea: {
    margin: {
      x: theme.spacing(3),
      y: theme.spacing(2)
    },
    background: {
      color: theme.palette.grey[60]
    },
    text: {
      ...theme.typography.body3,
      lineHeight: theme.typography.body3.lineHeight + 4,
      textColor: theme.palette.text.light.tertiary
    }
  },
  enter: {
    icon: {
      alpha: 1,
      scale: 1
    },
    container: {
      alpha: 1,
      scale: 1
    },
    text: {
      alpha: 1
    }
  },
  dismiss: {
    icon: {
      alpha: 0.001,
      scale: 0.2
    },
    container: {
      alpha: 0.001,
      scale: 0.4
    },
    text: {
      alpha: 0.001
    }
  }
});
