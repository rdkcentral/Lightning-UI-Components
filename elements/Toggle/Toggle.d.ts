import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface ToggleStyles {
  backgroundColor?: string;
  backgroundColorChecked?: string;
  knobWidth?: number;
  knobHeight?: number;
  knobPadding?: number;
  knobRadius?: Tools.CornerRadius;
  knobColor?: string;
  knobColorChecked?: string;
  knobX?: number;
  knobXChecked?: number;
  strokeColor?: string;
  strokeRadius?: Tools.CornerRadius;
  strokeWeight?: number;
}

declare const Toggle_base: WithThemeStylesConstructor<
  typeof Base,
  ToggleStyles
>;

export default class Toggle extends Base {
  checked?: boolean;
  styles?: ToggleStyles;
}
