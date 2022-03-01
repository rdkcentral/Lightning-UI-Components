import type { Base } from '../../Base';

declare class CheckboxStyles {
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

declare class Checkbox extends Base {
  checked?: boolean;
  disabled?: boolean;
  style: CheckboxStyles;
  toggle(): Checkbox;
}
