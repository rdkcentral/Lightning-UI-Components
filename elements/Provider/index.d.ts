import type Base from '../../Base';
import { __TextType, Tools } from '@lightningjs/core';

export interface ProviderStyles {
  counterBackgroundColor?: string;
  counterTextProperties?: __TextType;
  itemSize?: number;
  itemSpacing?: number;
  radius?: Tools.CornerRadius;
}

export default class Provider extends Base {
  disableRadius?: boolean;
  counterText?: string;
  providers: Array<Record<string, unknown>>;
  visibleCount: number;
  style: ProviderStyles;
}
