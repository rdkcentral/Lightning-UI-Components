import lng from '@lightningjs/core';

export interface WithTextMagnifier {
  set textMagnifierEnabled(val: boolean);
  get textMagnifierEnabled(): boolean;
}

export interface WithTextMagnifierConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithTextMagnifier;
}

export default function withAnnouncer<T extends typeof lng.Component>(
  base: T
): T & WithAnnouncerConstructor;
