import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { TextContent } from '../../layout/InlineContent';

export interface TextBoxStyles {
  maxLinesSuffix: string;
  offsetY: number;
  offsetX: number;
  textStyle: lng.textures.TextTexture.Settings;
  typography: Record<string, lng.textures.TextTexture.Settings>;
}

declare const TextBox_base: WithThemeStylesConstructor<
  typeof Base,
  TextBoxStyles
>;

export default class TextBox extends TextBox_base {
  content?: string | TextContent[];
  maxLines?: number;
  maxLinesSuffix?: lng.textures.TextTexture.Settings['maxLinesSuffix'];
  textStyle?: lng.textures.TextTexture.Settings | string;
  textColor?: lng.textures.TextTexture.Settings['textColor'];
  textAlign?: lng.textures.TextTexture.Settings['textAlign'];
  verticalAlign?: lng.textures.TextTexture.Settings['verticalAlign'];
  wordWrap?: lng.textures.TextTexture.Settings['wordWrap'];
  wordWrapWidth?: lng.textures.TextTexture.Settings['wordWrapWidth'];
}
