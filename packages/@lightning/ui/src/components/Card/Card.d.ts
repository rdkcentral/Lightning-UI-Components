import type lng from '@lightningjs/core';
import Surface, { SurfaceStyles, TextBoxStyles, Color, StylePartial } from '@lightning/ui-core';

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
