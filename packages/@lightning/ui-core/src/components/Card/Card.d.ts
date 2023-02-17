import type lng from '@lightningjs/core';
import Surface, { SurfaceStyle } from '../Surface';
import { TextBoxStyle } from '../TextBox';
import type { Color, StylePartial } from '../../types/lui';

export type CardStyle = SurfaceStyle & {
  backgroundColorDisabled: Color;
  backgroundColorFocused: Color;
  backgroundColorUnfocused: Color;
  paddingHorizontal: number;
  paddingVertical: number;
  radius: lng.Tools.CornerRadius;
  titleTextStyle: TextBoxStyle;
};

export default class Card extends Surface {
  title?: string;
  get style(): CardStyle;
  set style(v: StylePartial<CardStyle>);

  // tags
  get _Title(): lng.Component;
}
