import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface CheckboxStyles {
  checkColor?: string;
  checkH?: number;
  checkW?: number;
  checkedBackgroundColor?: string;
  checkSrc?: string;
  radius?: lng.Tools.CornerRadius;
  strokeColor?: string;
  strokeWidth?: number;
  uncheckedBackgroundColor?: string;
}

declare const Checkbox_base: WithThemeStylesConstructor<
  typeof Base,
  CheckboxStyles
>;

export default class Checkbox extends Checkbox_base {
  checked?: boolean;
  toggle(): Checkbox;
}
