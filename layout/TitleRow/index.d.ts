import type TextBox from '../../elements/TextBox';
import type Row from '../Row';
import type { RowStyles } from '../Row';

export interface TitleRowStyles extends RowStyles {
  w?: number;
  titleMarginLeft?: number;
  titleTextStyle?: TextBox['textStyle'];
  titleTextColor?: string;
  rowMarginTop?: number;
}

export default class TitleRow extends Row {
  title?: string;
}
