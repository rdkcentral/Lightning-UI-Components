import context from '../../context';

export const layout = {
  screenW: 1920,
  screenH: 1080,
  columnCount: 10,
  marginX: 150,
  marginY: 150,
  safe: 50,
  gutterX: {
    xs: 20,
    sm: 40,
    md: 60,
    lg: 80,
    xl: 100
  },
  gutterY: {
    xs: 20,
    sm: 40,
    md: 60,
    lg: 80,
    xl: 100
  },
  focusScale: 1.2
};

// TODO: After modes refactor, Emily to move these to Base component and
// return `this.style.layout.focusScale`
// so users can easily extend and overwrite scaling methods
export function getFocusScale() {
  return context.theme.layout.focusScale;
}

export function getUnfocusScale() {
  return 1;
}
