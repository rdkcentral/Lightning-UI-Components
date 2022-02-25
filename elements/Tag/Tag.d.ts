import type { Base } from '../../Base';

declare class TagStyles {
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

export declare class Tag extends Base {
  title: string;
  style?: TagStyles;
}
