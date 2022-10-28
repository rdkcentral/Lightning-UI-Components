import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type SurfaceStyles = {
  animation: TransitionObject;
  backgroundColor: Color;
  radius: lng.Tools.CornerRadius;
  scale: number;
};

export default class Surface extends Base {
  get style(): SurfaceStyles;
  set style(v: StylePartial<SurfaceStyles>);
}
