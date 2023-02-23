import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type LabelStyle = {
  backgroundColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textStyle: lng.textures.TextTexture.Settings;
};

export default class Label extends Base {
  title: string;
  get style(): LabelStyle;
  set style(v: StylePartial<LabelStyle>);

  // tags
  get _Background(): lng.Component;
  get _Text(): lng.Component;
}
