import type Base from '../../Base';
import type { Tools } from '@lightningjs/core';

export interface BadgeStyles {
  paddingX?: number;
  paddingY?: number;
  radius?: Tools.CornerRadius;
  textStyle?: string;
  textAlign?: string;
  backgroundColor?: string;
  textColor?: string;
  contentSpacing?: number;
}

export default class Badge extends Base {
  title?: string;
  iconWidth?: number;
  iconColor?: string;
  iconHeight?: number;
  icon?: string;
  iconAlign?: string;
  styles?: BadgeStyles;
}
