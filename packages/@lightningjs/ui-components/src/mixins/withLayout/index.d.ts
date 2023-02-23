import lng from '@lightningjs/core';

export interface LayoutOptions {
  w?: number;
  h?: number;
  circle?: boolean;
  ratioX?: number;
  ratioY?: number;
  upCount?: number;
}

export interface WithLayout {
  _previousDimensionsData: string;
  _itemLayout?: LayoutOptions;

  set itemLayout(val: LayoutOptions);
  get itemLayout(): LayoutOptions;

  _allowUpdate(): boolean;
  _updateItemLayout(): void;
}

export type WithLayoutConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType & WithLayout;
  };

export default function withLayout<BaseType extends typeof lng.Component>(
  base: BaseType
): WithLayoutConstructor<BaseType>;
