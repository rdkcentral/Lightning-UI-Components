import context from '../../globals/context/index';

const themeStyleCache = new Map();

context.on('themeUpdate', () => {
  themeStyleCache.clear();
});

export default themeStyleCache;
