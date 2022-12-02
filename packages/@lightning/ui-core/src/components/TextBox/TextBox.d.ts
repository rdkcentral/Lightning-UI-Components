import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextContent } from '../InlineContent/InlineContent';

export type TextBoxStyles = {
  offsetY: number;
  offsetX: number;
  textStyle: lng.textures.TextTexture.Settings | string;
  typography: Record<string, lng.textures.TextTexture.Settings>;
};

export default class TextBox extends Base {
  content?: string | TextContent[];
  marquee?: boolean;
  get style(): TextBoxStyles;
  set style(v: StylePartial<TextBoxStyles>);
}
