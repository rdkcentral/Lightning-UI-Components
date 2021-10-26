export default theme => {
  console.log(theme);
  return {
    w: 410,
    h: theme.spacing(1),
    radius: theme.radius.xsmall,
    barColor: theme.colors.surface,
    progressColor: theme.colors.fillNeutral1
    // focusRing: true
  };
};
