import Base from '../../Base.d.ts';

export interface ToggleStyles {
  w?: number;
  strokeRadius?: number;
  strokeWeight?: number;
  strokeColor?: string;
  strokeDisabledColor?: string;
  knobWidth?: number;
  knobHeight?: number;
  knobRadius?: number;
  knobPadding?: number;
  knobCheckedColor?: string;
  knobUncheckedColor?: string;
  knobDisabledColor?: string;
  knobCheckedX?: number;
  knobUncheckedX?: number;
  backgroundCheckedColor?: string;
  backgroundUncheckedColor?: string;
  backgroundDisabledColor?: string;
}

export default class Toggle extends Base {
  checked?: boolean;
  disabled?: boolean;
  styles?: ToggleStyles;
}
