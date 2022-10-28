import type lng from '@lightningjs/core';
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyles } from '../../elements/Surface';
import type { TextBoxStyles } from '../../elements/TextBox';

export type CardStyles = SurfaceStyles & {
  backgroundColorDisabled: Color;
  backgroundColorFocused: Color;
  backgroundColorUnfocused: Color;
  paddingHorizontal: number;
  paddingVertical: number;
  radius: lng.Tools.CornerRadius;
  titleTextStyle: TextBoxStyles;
};

export default class Card extends Surface {
  title?: string;
  get style(): CardStyles;
  set style(v: StylePartial<CardStyles>);
}
