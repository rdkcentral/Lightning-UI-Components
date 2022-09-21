import type lng from '@lightningjs/core';
import type Surface from '../../elements/Surface';
import type { SurfaceStyles } from '../../elements/Surface';

export interface CardStyles extends SurfaceStyles {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  radius?: lng.Tools.CornerRadius;
  textColorDisabled?: string;
  titleTextProperties?: lng.textures.TextTexture.Settings;
}

export default class Card extends Surface {
  style: CardStyles;
  title?: string;
}
