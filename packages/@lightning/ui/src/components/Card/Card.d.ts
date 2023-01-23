import type lng from '@lightningjs/core';
import type {
  Surface,
  SurfaceStyle,
  TextBoxStyle,
  Color,
  StylePartial
} from '@lightning/ui-core';

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
