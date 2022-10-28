import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

export type CheckboxStyles = {
  checkColor: Color;
  checkH: number;
  checkW: number;
  checkedBackgroundColor: Color;
  checkSrc: string;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
  uncheckedBackgroundColor: Color;
};

export default class Checkbox extends Base {
  checked?: boolean;
  toggle(): Checkbox;
  get style(): CheckboxStyles;
  set style(v: StylePartial<CheckboxStyles>);
}
