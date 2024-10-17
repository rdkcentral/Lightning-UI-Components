import Surface, { SurfaceStyle } from '../Surface';
import { StylePartial } from '../../types/lui';

type TextMagnifierStyle = SurfaceStyle & {
  color: string;
  gutterX: number;
  gutterY: number;
  h: number;
  marginX: number;
  radius: number | string;
  textStyle: any;
};

export default class TextMagnifier extends Surface {
  get style(): TextMagnifierStyle;
  set style(v: StylePartial<TextMagnifierStyle>);
  location: 'top' | 'bottom';
  mode: string;
  content: string | null;
}
