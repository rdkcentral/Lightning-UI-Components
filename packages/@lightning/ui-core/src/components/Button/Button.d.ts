import lng from '@lightningjs/core';
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyles } from '../Surface';
// text in Button is all using our own version of TextBox
import type { TextBoxStyles } from '../TextBox';

export type ButtonStyles = SurfaceStyles & {
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingXNoTitle: number;
  titlePadding: number;
  prefixH: number;
  suffixH: number;
  textStyle: TextBoxStyles;
  contentColor: Color;
};

export default class Button extends Surface {
  fixed?: boolean;
  justify?: 'center' | 'left' | 'right';
  prefix?: lng.Component | Array<lng.Component>;
  suffix?: lng.Component | Array<lng.Component>;
  title?: string;
  get style(): ButtonStyles;
  set style(v: StylePartial<ButtonStyles>);
}
