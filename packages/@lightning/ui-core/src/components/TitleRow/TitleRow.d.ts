import lng from '@lightningjs/core';
import type Row from '../Row';
import type { RowStyle } from '../Row';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

export type TitleRowStyle = RowStyle & {
  w: number;
  titleMarginLeft: number;
  titleTextStyle: TextBoxStyle;
  rowMarginTop: number;
};

export default class TitleRow extends Row {
  title?: string;
  get style(): TitleRowStyle;
  set style(v: StylePartial<TitleRowStyle>);

  // tags
  get _Title(): lng.Component;
}
