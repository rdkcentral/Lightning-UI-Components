import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type LabelStyles = {
  backgroundColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textStyle: lng.textures.TextTexture.Settings;
};

export default class Label extends Base {
  title: string;
  get style(): LabelStyles;
  set style(v: StylePartial<LabelStyles>);
}
