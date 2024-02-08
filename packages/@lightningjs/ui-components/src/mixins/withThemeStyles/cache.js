import context from '../../globals/context/index.js';

const themeStyleCache = new Map();

context.on('themeUpdate', () => {
  themeStyleCache.clear();
});

export default themeStyleCache;
