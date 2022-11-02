export const base = theme => {
  const size = theme.spacer.xl;
  return {
    w: size,
    h: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2
  };
};
