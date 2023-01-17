import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type RadioStyles = {
  alpha: number;
  backgroundColor: Color;
  backgroundColorChecked: Color;
  knobColor: Color;
  knobHeight: number;
  knobWidth: number;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
};

export default class Radio extends Base {
  checked?: boolean;
  get style(): RadioStyles;
  set style(v: StylePartial<RadioStyles>);

  // tags
  get _Knob(): lng.Component;
  get _Body(): lng.Component;
  get _Stroke(): lng.Component;
}
