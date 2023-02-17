import lng from '@lightningjs/core';
import Card, { CardStyle } from './Card';
import { TextBoxStyle } from '../TextBox';
import type { StylePartial } from '../../types/lui';

export type CardTitleStyle = CardStyle & {
  descriptionTextStyle: TextBoxStyle;
};

export default class CardTitle extends Card {
  description?: string;
  get style(): CardTitleStyle;
  set style(v: StylePartial<CardTitleStyle>);

  // tags
  get _Description(): lng.Component;
  get _Details(): lng.Component;
}
