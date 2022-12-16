import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type CheckboxStyles = {
  alpha: number;
  backgroundColor: Color;
  backgroundColorChecked: Color;
  checkColor: Color;
  checkH: number;
  checkW: number;
  checkSrc: string;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
};

export default class Checkbox extends Base {
  checked?: boolean;
  toggle(): Checkbox;
  get style(): CheckboxStyles;
  set style(v: StylePartial<CheckboxStyles>);
}
