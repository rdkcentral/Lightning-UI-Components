import type { __TextType } from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface TextBoxStyles {
  textStyle: __TextType;
  typography: Record<string, __TextType>;
  maxLinesSuffix: string;
  offsetY: number;
  offsetX: number;
}

declare const TextBox_base: WithThemeStylesConstructor<
  typeof Base,
  TextBoxStyles
>;

export default class TextBox extends TextBox_base {
  content?: string;
  textStyle?: __TextType | string;
  textColor?: __TextType['textColor'];
  textAlign?: __TextType['textAlign'];
  verticalAlign?: __TextType['verticalAlign'];
  wordWrap?: __TextType['wordWrap'];
  maxLines?: number;
  wordWrapWidth?: __TextType['wordWrapWidth'];
  maxLinesSuffix?: __TextType['maxLinesSuffix'];
}
