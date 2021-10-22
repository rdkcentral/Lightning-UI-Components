import context from '../../context';
export const layout = {
  spacingBase: 10
};

export function spacing(multiplier) {
  let base = 1;
  const theme = context.theme;
  if (theme && theme.layout && theme.layout.spacingBase) {
    base = theme.layout.spacingBase;
  }
  return base * multiplier;
}

export function getFocusScale(w) {
  return (w + 20) / w;
}

export function getUnfocusScale() {
  return 1;
}
