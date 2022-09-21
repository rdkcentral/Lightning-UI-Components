import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface RadioStyles {
  backgroundColor?: string;
  backgroundColorChecked?: string;
  knobColor?: string;
  knobHeight?: number;
  knobWidth?: number;
  radius?: lng.Tools.CornerRadius;
  strokeColor?: string;
  strokeWidth?: number;
}

declare const Radio_base: WithThemeStylesConstructor<typeof Base, RadioStyles>;

export default class Radio extends Radio_base {
  checked?: boolean;
  isInactive?: boolean;
}

export class RadioSmall extends Radio {}
