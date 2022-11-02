import type lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ShadowStyles = {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  alpha: number;
  radius: lng.Tools.CornerRadius;
  color: Color;
};

export default class Shadow extends Base {
  maskShadow?: boolean;
  get style(): ShadowStyles;
  set style(v: StylePartial<ShadowStyles>);
}
