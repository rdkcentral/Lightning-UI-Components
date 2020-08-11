const getDefaultTransitionOptions = () => ({
  properties: ['alpha', 'color', 'scale', 'h', 'w', 'x', 'y'],
  transition: {
    duration: 0.2,
    delay: 0,
    timingFunction: 'cubic-bezier(0.20, 1.00, 0.52, 1.00)'
  }
});

export const createTransitions = options => {
  const defaultOptions = getDefaultTransitionOptions();
  const opts = {
    ...defaultOptions,
    ...options,
    transition: {
      ...defaultOptions.transition,
      ...options.transition
    }
  };
  return opts.properties.reduce(
    (obj, key) => ({
      ...obj,
      [key]: { ...opts.transition }
    }),
    {}
  );
};
