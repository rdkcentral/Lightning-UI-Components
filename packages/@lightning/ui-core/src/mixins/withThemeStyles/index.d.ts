/* eslint-disable @typescript-eslint/no-explicit-any */
import lng from '@lightningjs/core';

export interface WithThemeStyles<StyleType> {
  _componentStyle: StyleType; // TODO: Remove when legacy code is also removed
  style: StyleType;
}

export type WithThemeStylesConstructor<
  BaseType extends lng.Component.Constructor,
  StyleType
> = BaseType & {
  new (...args: any[]): BaseType & WithThemeStyles<StyleType>;
  _componentStyle: StyleType; // TODO: Remove when legacy code is also removed
  style: StyleType;
};

export default function withThemeStyles<
  BaseType extends lng.Component.Constructor,
  StyleType
>(
  Base: BaseType,
  style: (theme: Record<string, any>) => StyleType
): WithThemeStylesConstructor<BaseType, StyleType>;
