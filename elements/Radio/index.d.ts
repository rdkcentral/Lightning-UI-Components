import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

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

declare const Radio_base: WithThemeStylesConstructor<typeof Base, RadioStyles>;

export default class Radio extends Radio_base {
  checked?: boolean;
  isInactive?: boolean;
}

export class RadioSmall extends Radio {}
