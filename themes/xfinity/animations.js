const durations = {
  none: 0,
  xfast: 0.2,
  fast: 0.4,
  normal: 0.6,
  slow: 0.8,
  xslow: 1
};

const delays = {
  none: 0,
  xfast: 0.02,
  fast: 0.04,
  normal: 0.06,
  slow: 0.08,
  xslow: 0.1
};

export default {
  durations,
  delays,
  expressive: {
    timingFunction: 'cubic-bezier(0.6, 0, 0.1, 1)',
    delay: delays.none,
    duration: durations.normal
  },
  expressiveEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 0.15, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  expressiveExit: {
    timingFunction: 'cubic-bezier(0.9, 0, 1, 1)',
    delay: delays.none,
    duration: durations.normal
  },
  standard: {
    timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
    delay: delays.none,
    duration: durations.normal
  },
  standardEntrance: {
    timingFunction: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
    delay: delays.none,
    duration: 0.3
  },
  standardExit: {
    timingFunction: 'cubic-bezier(0.8, -0.4, 0.8, 0.4)',
    delay: delays.none,
    duration: 0.3
  },
  utility: {
    timingFunction: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  utilityEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
    delay: delays.none,
    duration: durations.normal
  },
  utilityExit: {
    timingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
    delay: delays.none,
    duration: durations.normal
  }
};
