import type lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ShadowStyle = {
  alpha: number;
  blur: number;
  color: Color;
  offsetX: number;
  offsetY: number;
  radius: lng.Tools.CornerRadius;
  spread: number;
  maxOffsetX: number;
  maxOffsetY: number;
};

export default class Shadow extends Base {
  maskShadow?: boolean;
  get style(): ShadowStyle;
  set style(v: StylePartial<ShadowStyle>);

  // tags
  get _Frame(): lng.Component;
  get _Shadow(): lng.Component;
}
