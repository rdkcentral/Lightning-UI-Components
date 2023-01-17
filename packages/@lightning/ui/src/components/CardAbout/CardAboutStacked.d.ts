import lng from '@lightningjs/core';
import { TextBoxStyles, StylePartial } from '@lightning/ui-core';
import CardAbout, { CardAboutStyles } from './CardAbout';

export type CardAboutStackedStyles = CardAboutStyles & {
  descriptionTextStyle: TextBoxStyles;
  titleTextStyle: TextBoxStyles;
};

export class CardAboutStacked extends CardAbout {
  descriptionBottom?: string;
  titleBottom?: string;
  get style(): CardAboutStackedStyles;
  set style(v: StylePartial<CardAboutStackedStyles>);

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _TitleBottom(): lng.Component;
  get _DescriptionBottom(): lng.Component;
}
