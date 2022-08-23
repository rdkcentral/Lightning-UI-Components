export const base = theme => {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xl - strokeWidth * 2;
  return {
    w: size,
    h: size,
    checkW: theme.spacer.md,
    checkH: theme.spacer.md + theme.spacer.xxs,
    radius: size / 2,
    strokeWidth
  };
};
