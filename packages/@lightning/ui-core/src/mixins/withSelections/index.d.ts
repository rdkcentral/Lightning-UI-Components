import lng from '@lightningjs/core';

export const setSelected: unique symbol;
export const currentSelected: unique symbol;

export interface WithSelectionsOptionsKeys {
  currentSelected?: string;
  currentSelectedIndex?: string;
  isSelected?: string;
  items?: string;
  setSelected?: string;
}

export interface WithSelectionsOptions {
  captureKey?: string;
  defaultIndex?: number;
  eventName?: string;
  options?: WithSelectionsOptionsKeys;
}

export interface WithSelections {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get [currentSelected](): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [setSelected](selected: any, val: any): void;
}

export interface WithSelectionsConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithSelections;
}

export default function withExtensions<BaseType extends typeof lng.Component>(
  base: BaseType,
  options: WithSelectionsOptions
): BaseType & WithSelectionsConstructor;
