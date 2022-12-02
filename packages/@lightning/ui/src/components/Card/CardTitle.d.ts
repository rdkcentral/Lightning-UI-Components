import Card, { CardStyles } from './Card';
import type { TextBoxStyles, StylePartial } from '@lightning/ui-core';

export type CardTitleStyles = CardStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardTitle extends Card {
  description?: string;
  get style(): CardTitleStyles;
  set style(v: StylePartial<CardTitleStyles>);
}
