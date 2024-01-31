import { context } from '../../globals/index.js';

const themeStyleCache = new WeakMap();

// context.on('themeUpdate', () => {
//   themeStyleCache && themeStyleCache.clear();
// });

export default themeStyleCache;
