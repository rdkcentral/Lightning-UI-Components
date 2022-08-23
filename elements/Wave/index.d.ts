import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface WaveStyles {
  color?: string;
  duration?: number;
  height?: number;
  keyframes?: [number, number, number, number];
  lockedRatio?: number;
  lockedPaddingRatio?: number;
  radius?: Tools.CornerRadius;
  repeat?: number;
  w?: number;
}

declare const Wave_base: WithThemeStylesConstructor<typeof Base, WaveStyles>;

export default class Wave extends Wave_base {
  style?: WaveStyles;
}
