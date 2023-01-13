import type lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ShadowStyles = {
  alpha: number;
  blur: number;
  color: Color;
  offsetX: number;
  offsetY: number;
  radius: lng.Tools.CornerRadius;
  spread: number;
};

export default class Shadow extends Base {
  maskShadow?: boolean;
  get style(): ShadowStyles;
  set style(v: StylePartial<ShadowStyles>);
}
