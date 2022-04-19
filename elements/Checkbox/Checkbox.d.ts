import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface CheckboxStyles {
  w?: number;
  h?: number;
  radius?: number;
  strokeWidth?: number;
  checkW?: number;
  checkH?: number;
  checkSrc?: string;
  strokeColor?: string;
  disabledStrokeColor?: string;
  checkColor?: string;
  checkedBackgroundColor?: string;
  uncheckedBackgroundColor?: string;
  disabledBackgroundColor?: string;
}

declare const Checkbox_base: WithThemeStylesConstructor<
  typeof Base,
  CheckboxStyles
>;

export default class Checkbox extends Checkbox_base {
  checked?: boolean;
  disabled?: boolean;
  toggle(): Checkbox;
}
