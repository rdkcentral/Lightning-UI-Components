/* eslint-disable @typescript-eslint/no-explicit-any */
import lng from '@lightningjs/core';
export { default as processThemeStyles } from './processThemeStyles';

export interface WithThemeStyles<StyleType> {
  _componentStyles: StyleType;
}

export type WithThemeStylesConstructor<
  BaseType extends typeof lng.Component,
  StyleType
> = BaseType & {
  new (...args: any[]): BaseType & WithThemeStyles<StyleType>;
  _componentStyles: StyleType;
};

export default function withThemeStyles<
  BaseType extends typeof lng.Component,
  StyleType
>(
  Base: BaseType,
  styles: (theme: Record<string, any>) => StyleType
): WithThemeStylesConstructor<BaseType, StyleType>;
