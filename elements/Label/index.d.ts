import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface LabelStyles {
  backgroundColor?: string;
  paddingX?: number;
  paddingY?: number;
  radius?: lng.Tools.CornerRadius;
  textStyle?: string;
}

declare const Label_base: WithThemeStylesConstructor<typeof Base, LabelStyles>;

export default class Label extends Label_base {
  title: string;
  style: LabelStyles;
}
