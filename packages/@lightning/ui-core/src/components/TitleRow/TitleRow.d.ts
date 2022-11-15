import type Row from '../Row';
import type { RowStyles } from '../Row';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type TitleRowStyles = RowStyles & {
  w: number;
  titleMarginLeft: number;
  titleTextStyle: TextBoxStyles;
  rowMarginTop: number;
};

export default class TitleRow extends Row {
  title?: string;
  get style(): TitleRowStyles;
  set style(v: StylePartial<TitleRowStyles>);
}
