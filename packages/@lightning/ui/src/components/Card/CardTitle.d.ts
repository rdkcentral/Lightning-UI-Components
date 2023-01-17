import lng from '@lightningjs/core';
import type { TextBoxStyles, StylePartial } from '@lightning/ui-core';
import Card, { CardStyles } from './Card';

export type CardTitleStyles = CardStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardTitle extends Card {
  description?: string;
  get style(): CardTitleStyles;
  set style(v: StylePartial<CardTitleStyles>);

  // tags
  get _Description(): lng.Component;
  get _Details(): lng.Component;
}
