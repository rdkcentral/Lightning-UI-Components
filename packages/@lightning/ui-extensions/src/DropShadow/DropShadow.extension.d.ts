/* eslint-disable @typescript-eslint/no-explicit-any */
import lng from '@lightningjs/core';

export type WithDropShadow = {
  _updateDropShadow(): void;
};

export type WithDropShadowConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    new (...args: any[]): BaseType & WithDropShadow;
  };

export default function dropShadowExtension<
  BaseType extends typeof lng.Component
>(Base: BaseType): WithDropShadowConstructor<BaseType>;

export function dropShadowExtensionGenerator(ExtensionArgs?: {
  componentsToMask?: string[];
  zOffset?: number;
}): typeof dropShadowExtension;
