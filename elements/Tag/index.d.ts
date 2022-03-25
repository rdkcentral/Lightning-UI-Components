import type Base from '../../Base';

export interface TagStyles {
  backgroundColor?: string;
  titleColor?: string;
  textStyle?: string;
  paddingX?: number;
  paddingY?: number;
  radiusTopLeft: number;
  radiusTopRight: number;
  radiusBottomRight: number;
  radiusBottomLeft: number;
}

export default class Tag extends Base {
  title: string;
  style?: TagStyles;
}
