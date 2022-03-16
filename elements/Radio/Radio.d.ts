import type { Base } from '../../Base';

export interface RadioStyles {
  strokeColor?: string;
  knobColor?: string;
  backgroundColor?: string;
  backgroundColorOff?: string;
  backgroundColorInactive?: string;
  strokeColorInactive?: string;
  radius?: number;
  strokeWidth?: number;
  knobHeight?: number;
  knobWidth?: number;
}
export default class Radio extends Base {
  checked?: boolean;
  isInactive?: boolean;
  style?: RadioStyles;
}
