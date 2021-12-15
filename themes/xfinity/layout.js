import { spacing } from '../base/layout';

export const layout = {
  gutterXMultiplier: 3,
  gutterYMultiplier: 3,
  marginXMultiplier: 19,
  marginYMultiplier: 19,
  safeMultiplier: 6,
  utilityMultiplier: 8,
  spacingBase: 8,
  columnCount: 12
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
