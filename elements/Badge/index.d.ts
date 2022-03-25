import type Base from '../../Base';

export interface BadgeStyles {
  paddingX?: number;
  paddingY?: number;
  radius?: number;
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
