import lng from '@lightningjs/core';
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
// text should be using our own version of TextBox
import { TextBoxStyle } from '../TextBox';

export type TabStyle = SurfaceStyle & {
  backgroundColor: Color;
  contentColor: Color;
  iconMarginRight: number;
  iconSize: number;
  noTitlePaddingX: number;
  paddingX: number;
  paddingY: number;
  radius: number;
  textStyle: TextBoxStyle;
};

export default class Tab extends Surface {
  icon?: string;
  title?: string;
  get _textW(): number;
  get _iconW(): number;
  get _iconH(): number;
  get _paddingX(): number;
  get style(): TabStyle;
  set style(v: StylePartial<TabStyle>);

  // tags
  get _Content(): lng.Component;
  get _Icon(): lng.Component;
  get _Text(): lng.Component;
}
