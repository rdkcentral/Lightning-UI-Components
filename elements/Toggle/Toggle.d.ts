import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface ToggleStyles {
  w?: number;
  strokeRadius?: Tools.CornerRadius;
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

declare const Toggle_base: WithThemeStylesConstructor<
  typeof Base,
  ToggleStyles
>;

export default class Toggle extends Base {
  checked?: boolean;
  disabled?: boolean;
  styles?: ToggleStyles;
}
