import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface LabelStyles {
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

declare const Label_base: WithThemeStylesConstructor<typeof Base, LabelStyles>;

export default class Label extends Label_base {
  title: string;
  style?: LabelStyles;
}
