import lng from '@lightningjs/core';
import type { Base, Color, StylePartial } from '@lightning/ui-core';

export type WaveStyle = {
  color: Color;
  duration: number;
  height: number;
  keyframes: [number, number, number, number];
  lockedRatio: number;
  lockedPaddingRatio: number;
  radius: lng.Tools.CornerRadius;
  repeat: number;
  w: number;
};

export default class Wave extends Base {
  get style(): WaveStyle;
  set style(v: StylePartial<WaveStyle>);

  // tags
  get _Left1(): lng.Component;
  get _Left2(): lng.Component;
  get _Middle(): lng.Component;
  get _Right1(): lng.Component;
  get _Right2(): lng.Component;
}
