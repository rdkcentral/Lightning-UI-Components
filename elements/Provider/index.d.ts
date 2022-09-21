import type Base from '../../Base';
import type lng from '@lightningjs/core';

export interface ProviderStyles {
  counterBackgroundColor?: string;
  counterTextProperties?: lng.textures.TextTexture.Settings;
  itemSize?: number;
  itemSpacing?: number;
  radius?: lng.Tools.CornerRadius;
}

export default class Provider extends Base {
  disableRadius?: boolean;
  counterText?: string;
  providers: Array<Record<string, unknown>>;
  visibleCount: number;
  style: ProviderStyles;
}
