const durations = {
  durationNone: 0,
  durationXFast: 0.2,
  durationFast: 0.4,
  durationNormal: 0.6,
  durationSlow: 0.8,
  durationXSlow: 1
};

const delays = {
  delayNone: 0,
  delayXFast: 0.02,
  delayFast: 0.04,
  delayNormal: 0.06,
  delaySlow: 0.08,
  delayXSlow: 0.1
};

export default {
  ...durations,
  ...delays,
  emphasizedEntrance: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
  emphasizedEntranceDelay: delays.delayNone,
  emphasizedEntranceDuration: 0.3,
  emphasizedExit: 'cubic-bezier(0.8, -0.4, 0.8, 0.4)',
  emphasizedExitDelay: delays.delayNone,
  emphasizedExitDuration: 0.3,
  emphasizedStandard: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
  emphasizedStandardDelay: delays.delayNone,
  emphasizedStandardDuration: durations.durationNormal,
  expressiveEntrance: 'cubic-bezier(0, 0, 0.15, 1)',
  expressiveEntranceDelay: delays.delayNone,
  expressiveEntranceDuration: durations.durationFast,
  expressiveExit: 'cubic-bezier(0.9, 0, 1, 1)',
  expressiveExitDelay: delays.delayNone,
  expressiveExitDuration: durations.durationNormal,
  expressiveStandard: 'cubic-bezier(0.6, 0, 0.1, 1)',
  expressiveStandardDelay: delays.delayNone,
  expressiveStandardDuration: durations.durationNormal,
  functionalEntrance: 'cubic-bezier(0, 0, 0.4, 1)',
  functionalEntranceDelay: delays.delayNone,
  functionalEntranceDuration: durations.durationNormal,
  functionalExit: 'cubic-bezier(0.4, 0, 1, 1)',
  functionalExitDelay: delays.delayNone,
  functionalExitDuration: durations.durationNormal,
  functionalStandard: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
  functionalStandardDelay: delays.delayNone,
  functionalStandardDuration: durations.durationFast
};
