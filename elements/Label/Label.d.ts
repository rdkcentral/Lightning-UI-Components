import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type LabelStyles = {
  backgroundColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textStyle: TextBoxStyles;
};

export default class Label extends Base {
  title: string;
  get style(): LabelStyles;
  set style(v: StylePartial<LabelStyles>);
}
