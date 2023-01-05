import lng from '@lightningjs/core';

export type WithClassCacheConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType;
  };

export default function withClassCache<BaseType extends typeof lng.Component>(
  base: BaseType
): WithClassCacheConstructor<BaseType>;
