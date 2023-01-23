import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type IconStyle = {
  color: Color;
};

export default class Icon extends Base {
  icon: string;
  fixed?: boolean;
  get style(): IconStyle;
  set style(v: StylePartial<IconStyle>);
}
