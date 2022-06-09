/* eslint-disable @typescript-eslint/no-explicit-any */
import lng from '@lightningjs/core';

export interface WithFocusRing {
  _updateFocusRing(): void;
  _updateFocusRingStyles(): void;
}

export type WithFocusRingConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    new (...args: any[]): BaseType & WithFocusRing;
  };

export default function withFocusRing<BaseType extends typeof lng.Component>(
  Base: BaseType
): WithFocusRingConstructor<BaseType>;
