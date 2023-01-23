export const base = theme => {
  return {
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    inputSpacing: theme.spacer.md * 10 + theme.spacer.md,
    inputStyle: { radius: theme.radius.md }
  };
};
