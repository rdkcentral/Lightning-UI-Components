import lng from '@lightningjs/core';

export interface WithEditItems {
  get selectedIndex(): number;
  set selectedIndex(val: number);

  toggleEdit(): void;
}

export interface WithEditItemsConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithEditItems;
}

export default function withTags<BaseType extends typeof lng.Component>(
  base: BaseType
): BaseType & WithEditItemsConstructor;
