import lng from '@lightningjs/core';

export type WithTagsConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType;
  };

export default function withTags<BaseType extends typeof lng.Component>(
  base: BaseType
): WithTagsConstructor<BaseType>;
