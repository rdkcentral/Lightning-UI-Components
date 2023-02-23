import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type CheckboxStyle = {
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
  get style(): CheckboxStyle;
  set style(v: StylePartial<CheckboxStyle>);

  // tags
  get _Check(): lng.Component;
  get _Body(): lng.Component;
  get _Stroke(): lng.Component;
}
