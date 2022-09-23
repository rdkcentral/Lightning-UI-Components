import type { __TextType } from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface TabStyles {
  backgroundColor?: string;
  contentColor?: string;
  iconMarginRight?: number;
  iconSize?: number;
  noTitlePaddingX?: number;
  paddingX?: number;
  paddingY?: number;
  radius?: number;
  textStyle?: __TextType | string;
}

declare const Tab_base: WithThemeStylesConstructor<typeof Base, TabStyles>;

export default class Tab extends Tab_base {
  icon?: string;
  title?: string;
}
