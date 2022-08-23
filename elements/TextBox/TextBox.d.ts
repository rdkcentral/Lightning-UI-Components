import type { __TextType } from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface TextBoxStyles {
  maxLinesSuffix: string;
  offsetY: number;
  offsetX: number;
  textStyle: __TextType;
  typography: Record<string, __TextType>;
}

declare const TextBox_base: WithThemeStylesConstructor<
  typeof Base,
  TextBoxStyles
>;

export default class TextBox extends TextBox_base {
  content?: string;
  maxLines?: number;
  maxLinesSuffix?: __TextType['maxLinesSuffix'];
  textStyle?: __TextType | string;
  textColor?: __TextType['textColor'];
  textAlign?: __TextType['textAlign'];
  verticalAlign?: __TextType['verticalAlign'];
  wordWrap?: __TextType['wordWrap'];
  wordWrapWidth?: __TextType['wordWrapWidth'];
}
