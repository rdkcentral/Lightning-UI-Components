import lng from '@lightningjs/core';
import type { Color, StylePartial } from '@lightning/ui-core';
import { Base } from '@lightning/ui-core';

export type WaveStyles = {
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
  get style(): WaveStyles;
  set style(v: StylePartial<WaveStyles>);
}