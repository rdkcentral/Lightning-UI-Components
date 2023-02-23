export default function (classImp) {
  const cache = new Map();

  return base => {
    if (cache.has(base)) {
      return cache.get(base);
    }

    const classWithNewBase = classImp(base);
    cache.set(base, classWithNewBase);
    return classWithNewBase;
  };
}
