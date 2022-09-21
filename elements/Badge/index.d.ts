import type Base from '../../Base';
import type lng from '@lightningjs/core';

export interface BadgeStyles {
  backgroundColor?: string;
  contentSpacing?: number;
  iconColor?: string;
  paddingX?: number;
  paddingY?: number;
  radius?: lng.Tools.CornerRadius;
  textStyle?: string;
  textAlign?: string;
}

export default class Badge extends Base {
  title?: string;
  iconWidth?: number;
  iconColor?: string;
  iconHeight?: number;
  icon?: string;
  iconAlign?: string;
  style: BadgeStyles;
}
