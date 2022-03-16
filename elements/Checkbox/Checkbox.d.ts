import type { Base } from '../../Base';

export interface CheckboxStyles {
  w?: number;
  h?: number;
  radius?: number;
  strokeWidth?: number;
  checkW?: number;
  checkH?: number;
  strokeColor: string;
  disabledStrokeColor: string;
  checkColor: string;
  checkedBackgroundColor: string;
  uncheckedBackgroundColor: string;
  disabledBackgroundColor: string;
}

export default class Checkbox extends Base {
  checked?: boolean;
  disabled?: boolean;
  style: CheckboxStyles;
  toggle(): Checkbox;
}
