import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextContent } from '../InlineContent/InlineContent';
import TextBox, { TextBoxStyles } from './TextBox';

export type TextBoxStyles = {
  maxLinesSuffix: string;
  offsetY: number;
  offsetX: number;
  textStyle: lng.textures.TextTexture.Settings | string;
  typography: Record<string, lng.textures.TextTexture.Settings>;
}

export default class TextBox extends Base {
  content?: string | TextContent[];
  maxLines?: number;
  maxLinesSuffix?: lng.textures.TextTexture.Settings['maxLinesSuffix'];
  textStyle?: lng.textures.TextTexture.Settings | string;
  textColor?: lng.textures.TextTexture.Settings['textColor'];
  textAlign?: lng.textures.TextTexture.Settings['textAlign'];
  verticalAlign?: lng.textures.TextTexture.Settings['verticalAlign'];
  wordWrap?: lng.textures.TextTexture.Settings['wordWrap'];
  wordWrapWidth?: lng.textures.TextTexture.Settings['wordWrapWidth'];
  get style(): TextBoxStyles;
  set style(v: StylePartial<TextBoxStyles>);
}