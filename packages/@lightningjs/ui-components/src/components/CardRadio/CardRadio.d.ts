import type { StylePartial } from '../../types/lui';
import { TextBoxStyle } from '../TextBox';
import CardTitle, { CardTitleStyle } from '../Card/CardTitle';

export type CardRadioStyle = CardTitleStyle & {
  iconHeight: number;
  iconWidth: number;
  subtitleTextStyle: TextBoxStyle;
};

export default class CardRadio extends CardTitle {
  icon?: string;
  subtitle?: string;
  get style(): CardRadioStyle;
  set style(v: StylePartial<CardRadioStyle>);
}
