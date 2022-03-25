import type Base from '../../Base.d.ts';
import type ToggleSmall from './ToggleSmall';

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

class Toggle extends Base {
  checked?: boolean;
  disabled?: boolean;
  styles?: ToggleStyles;
}

export { Toggle as default, ToggleSmall };
