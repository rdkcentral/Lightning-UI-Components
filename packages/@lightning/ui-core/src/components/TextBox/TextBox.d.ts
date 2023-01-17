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
  get marqueeOverrideLoopX(): number;
  set marqueeOverrideLoopX(v: number);
  get style(): TextBoxStyles;
  set style(v: StylePartial<TextBoxStyles>);

  // tags
  get _InlineContent(): lng.Component;
  get _Marquee(): lng.Component;
  get _Text(): lng.Component;
}
