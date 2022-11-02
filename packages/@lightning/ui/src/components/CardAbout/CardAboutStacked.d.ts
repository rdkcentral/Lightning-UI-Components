import CardAbout, { CardAboutStyles } from '../CardAbout';
import type { TextBoxStyles, StylePartial } from '@lightning/ui-core';

export type CardAboutStackedStyles = CardAboutStyles & {
  descriptionTextStyle: TextBoxStyles;
  titleTextStyle: TextBoxStyles;
};

export class CardAboutStacked extends CardAbout {
  descriptionBottom?: string;
  titleBottom?: string;
  get style(): CardAboutStackedStyles;
  set style(v: StylePartial<CardAboutStackedStyles>);
}
