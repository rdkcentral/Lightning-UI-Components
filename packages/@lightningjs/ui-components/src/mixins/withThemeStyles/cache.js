import { context } from '../../globals/index.js';

const themeStyleCache = new Map();

export const warmThemeCache = styleObj => {
  for (const [key, value] of Object.entries(styleObj)) {
    themeStyleCache.set(key, value);
  }
  console.log(themeStyleCache);
};

context.on('themeUpdate', () => {
  themeStyleCache.clear();
});

export default themeStyleCache;
