import CardAbout, { CardAboutStyles } from '../CardAbout';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../../elements/TextBox';

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
