import type lng from '@lightningjs/core';
import type Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type BadgeStyles = {
  backgroundColor: Color;
  contentSpacing: number;
  iconColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textStyle: lng.textures.TextTexture.Settings;
  textAlign: string;
};

export default class Badge extends Base {
  title?: string;
  iconWidth?: number;
  iconColor?: Color;
  iconHeight?: number;
  icon?: string;
  iconAlign?: string;
  get style(): BadgeStyles;
  set style(v: StylePartial<BadgeStyles>);
}
