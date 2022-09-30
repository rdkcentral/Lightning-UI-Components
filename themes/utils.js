export function convertHexToAlphaArray(colors, alpha) {
  const obj = Object.keys(colors).reduce((acc, curr) => {
    acc[curr] = [colors[curr], alpha];
    return acc;
  }, {});
  return obj;
}
