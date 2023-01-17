import lng from '@lightningjs/core';
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyles } from '../Surface';
// text should be using our own version of TextBox
import { TextBoxStyles } from '../TextBox';

export type TabStyles = SurfaceStyles & {
  backgroundColor: Color;
  contentColor: Color;
  iconMarginRight: number;
  iconSize: number;
  noTitlePaddingX: number;
  paddingX: number;
  paddingY: number;
  radius: number;
  textStyle: TextBoxStyles;
};

export default class Tab extends Surface {
  icon?: string;
  title?: string;
  get _textW(): number;
  get _iconW(): number;
  get _iconH(): number;
  get _paddingX(): number;
  get style(): TabStyles;
  set style(v: StylePartial<TabStyles>);

  // tags
  get _Content(): lng.Component;
  get _Icon(): lng.Component;
  get _Text(): lng.Component;
}
