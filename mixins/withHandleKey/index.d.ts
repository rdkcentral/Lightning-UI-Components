import lng from '@lightningjs/core';

export type WithHandleKeyConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType;
  };

export default function withHandleKey<BaseType extends typeof lng.Component>(
  base: BaseType
): WithHandleKeyConstructor<BaseType>;
