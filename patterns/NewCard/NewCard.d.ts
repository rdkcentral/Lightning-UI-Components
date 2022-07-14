import { __TextType, Tools } from '@lightningjs/core';
import type Surface from '../../elements/Surface';

export interface NewCardStyles extends Surface {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  radius?: Tools.CornerRadius;
  textColorDisabled?: string;
  titleTextProperties?: __TextType;
}

export default class NewCard extends Surface {
  styles?: NewCardStyles;
  title?: string;
}
