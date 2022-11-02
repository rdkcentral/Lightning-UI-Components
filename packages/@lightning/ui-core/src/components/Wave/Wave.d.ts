import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

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
