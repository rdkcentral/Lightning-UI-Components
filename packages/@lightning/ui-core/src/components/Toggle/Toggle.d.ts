import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ToggleStyle = {
  backgroundColor: Color;
  backgroundColorChecked: Color;
  knobWidth: number;
  knobHeight: number;
  knobPadding: number;
  knobRadius: lng.Tools.CornerRadius;
  knobColor: Color;
  knobColorChecked: Color;
  knobX: number;
  knobXChecked: number;
  strokeColor: Color;
  strokeRadius: lng.Tools.CornerRadius;
  strokeWeight: number;
};

export default class Toggle extends Base {
  checked?: boolean;
  toggle(): this; // TODO is this valid?
  get style(): ToggleStyle;
  set style(v: StylePartial<ToggleStyle>);

  // tags
  get _Container(): lng.Component;
  get _Knob(): lng.Component;
  get _Stroke(): lng.Component;
}
