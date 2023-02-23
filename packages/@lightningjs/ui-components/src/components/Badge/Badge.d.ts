import type lng from '@lightningjs/core';
import type Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type BadgeStyle = {
  backgroundColor: Color;
  contentSpacing: number;
  iconColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textAlign: string;
  textStyle: lng.textures.TextTexture.Settings;
};

export default class Badge extends Base {
  title?: string;
  icon?: string;
  iconAlign?: string;
  iconHeight?: number;
  iconWidth?: number;
  get style(): BadgeStyle;
  set style(v: StylePartial<BadgeStyle>);

  // tags
  get _Text(): lng.Component;
  get _Icon(): lng.Component;
}
