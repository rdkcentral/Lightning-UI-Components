import { __TextType, Tools } from '@lightningjs/core';
import type Surface from '../../elements/Surface';

export interface CardStyles extends Surface {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  radius?: Tools.CornerRadius;
  textColorDisabled?: string;
  titleTextProperties?: __TextType;
}

export default class Card extends Surface {
  style: CardStyles;
  title?: string;
}
