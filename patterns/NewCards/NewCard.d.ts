import { __TextType } from '@lightningjs/core';
import type Surface from '../../elements/Surface';

export interface NewCardStyles extends Surface {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  radius?: number;
  textColorDisabled?: string;
  titleTextProperties?: __TextType;
}

export default class NewCard extends Surface {
  styles?: NewCardStyles;
  title?: string;
}
