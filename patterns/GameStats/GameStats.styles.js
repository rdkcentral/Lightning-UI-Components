export const baseStyles = theme => ({
  left: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  },
  label: {
    w: 170,
    text: {
      ...theme.typography.caption,
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    alpha: 0.6
  },
  right: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    alpha: 0
  },
  stat: {
    w: 80,
    text: {
      ...theme.typography.body2,
      textAlign: 'left',
      verticalAlign: 'middle'
    }
  },
  padding: {
    x: theme.spacing(2)
  }
});

export const styles = theme => ({
  padding: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  getFocusScale: theme.getFocusScale
});
