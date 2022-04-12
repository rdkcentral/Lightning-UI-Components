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

  set itemLayout(val: LayoutOptions): void;
  get itemLayout(): LayoutOptions;

  _allowUpdate(): boolean;
  _updateItemLayout(): void;
}

export interface WithLayout {
  new(...args: any[]): WithLayout;
}

export default function withLayout<T>(
  base: T,
): T & WithAnnouncerConstructor;