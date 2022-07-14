import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import type { Tools } from '@lightningjs/core';

export interface LabelStyles {
  backgroundColor?: string;
  titleColor?: string;
  textStyle?: string;
  paddingX?: number;
  paddingY?: number;
  radius?: Tools.CornerRadius;
}

declare const Label_base: WithThemeStylesConstructor<typeof Base, LabelStyles>;

export default class Label extends Label_base {
  title: string;
  style?: LabelStyles;
}
