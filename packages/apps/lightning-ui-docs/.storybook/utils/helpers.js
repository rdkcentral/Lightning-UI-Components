export function convertNumToHexAlphaArray(color) {
  const [r, g, b, a] = getRgbaString(color);
  return [rgbToHex(r, g, b).toUpperCase(), a * 100];
}

export function getRgbaString(color) {
  const r = ((color / 65536) | 0) % 256;
  const g = ((color / 256) | 0) % 256;
  const b = color % 256;
  const a = ((color / 16777216) | 0) / 255;
  return [r, g, b, a.toFixed(2)];
}

export function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
