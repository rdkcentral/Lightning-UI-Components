import { spacing } from '../base/layout';

export const layout = {
  spacingBase: 8
};

export function getFocusScale(w, h) {
  const size = Math.max(w, h);
  let multiplier = 5;
  switch (true) {
    case size >= 260:
      multiplier = 5;
      break;
    case size >= 185:
      multiplier = 4;
      break;
    case size >= 140:
      multiplier = 3;
      break;
    case size >= 110:
      multiplier = 2;
      break;
    default:
      multiplier = 2;
      break;
  }
  return (size + spacing(multiplier)) / size;
}
