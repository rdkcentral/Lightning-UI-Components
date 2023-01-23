/* eslint-disable @typescript-eslint/no-explicit-any */
import lng from '@lightningjs/core';

export type WithFocusRing = {
  _updateFocusRing(): void;
  _updateFocusRingStyle(): void;
};

export type WithFocusRingConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    new (...args: any[]): BaseType & WithFocusRing;
  };

export default function focusRingExtension<
  BaseType extends typeof lng.Component
>(Base: BaseType): WithFocusRingConstructor<BaseType>;

export function focusRingExtensionGenerator(ExtensionArgs?: {
  zOffset?: number;
}): typeof focusRingExtension;
