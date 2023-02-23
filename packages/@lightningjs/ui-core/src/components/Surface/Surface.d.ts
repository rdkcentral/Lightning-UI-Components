import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type SurfaceStyle = {
  animation: TransitionObject;
  backgroundColor: Color;
  radius: lng.Tools.CornerRadius;
  scale: number;
};

export default class Surface extends Base {
  get innerH(): number;
  get innerW(): number;
  get style(): SurfaceStyle;
  set style(v: StylePartial<SurfaceStyle>);

  // tags
  get _Background(): lng.Component;
}
