import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface ToggleStyles {
  backgroundColor?: string;
  backgroundColorChecked?: string;
  knobWidth?: number;
  knobHeight?: number;
  knobPadding?: number;
  knobRadius?: lng.Tools.CornerRadius;
  knobColor?: string;
  knobColorChecked?: string;
  knobX?: number;
  knobXChecked?: number;
  strokeColor?: string;
  strokeRadius?: lng.Tools.CornerRadius;
  strokeWeight?: number;
}

declare const Toggle_base: WithThemeStylesConstructor<
  typeof Base,
  ToggleStyles
>;

export default class Toggle extends Base {
  checked?: boolean;
  style: ToggleStyles;
}
