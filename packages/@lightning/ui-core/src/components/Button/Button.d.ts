import lng from '@lightningjs/core';
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
// text in Button is all using our own version of TextBox
import type { TextBoxStyle } from '../TextBox';

export type ButtonStyle = SurfaceStyle & {
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingXNoTitle: number;
  titlePadding: number;
  prefixH: number;
  suffixH: number;
  textStyle: TextBoxStyle;
  contentColor: Color;
};

export default class Button extends Surface {
  fixed?: boolean;
  justify?: 'center' | 'left' | 'right';
  prefix?: lng.Component | Array<lng.Component>;
  suffix?: lng.Component | Array<lng.Component>;
  title?: string;
  get style(): ButtonStyle;
  set style(v: StylePartial<ButtonStyle>);

  // tags
  get _TextWrapper(): lng.Component;
  get _Title(): lng.Component;
  get _Prefix(): lng.Component;
  get _Suffix(): lng.Component;
}
