import { context } from '../../globals/index.js';

const themeStyleCache = new Map();

context.on('themeUpdate', () => {
  themeStyleCache.clear();
});

export default themeStyleCache;
