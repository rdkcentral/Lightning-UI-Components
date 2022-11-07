import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type IconStyles = {
  color: Color;
};

export default class Icon extends Base {
  icon: string;
  fixed?: boolean;
  get style(): IconStyles;
  set style(v: StylePartial<IconStyles>);
}
