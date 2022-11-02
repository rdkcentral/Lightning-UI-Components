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
  get style(): TabStyles;
  set style(v: StylePartial<TabStyles>);
}
