import Card, { CardStyles } from './Card';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../../elements/TextBox';

export type CardTitleStyles = CardStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardTitle extends Card {
  description?: string;
  get style(): CardTitleStyles;
  set style(v: StylePartial<CardTitleStyles>);
}
