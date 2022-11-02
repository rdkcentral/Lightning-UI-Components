import CardTitle, { CardTitleStyles } from './CardTitle';
import type { StylePartial, TextBoxStyles } from '@lightning/ui-core';

export type CardPersonalityStyles = CardTitleStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardPersonality extends CardTitle {
  src: string;
  get style(): CardPersonalityStyles;
  set style(v: StylePartial<CardPersonalityStyles>);
}
