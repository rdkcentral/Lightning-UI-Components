import lng from '@lightningjs/core';
import { TextBoxStyle, StylePartial } from '@lightning/ui-core';
import CardAbout, { CardAboutStyle } from './CardAbout';

export type CardAboutStackedStyle = CardAboutStyle & {
  descriptionTextStyle: TextBoxStyle;
  titleTextStyle: TextBoxStyle;
};

export class CardAboutStacked extends CardAbout {
  descriptionBottom?: string;
  titleBottom?: string;
  get style(): CardAboutStackedStyle;
  set style(v: StylePartial<CardAboutStackedStyle>);

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _TitleBottom(): lng.Component;
  get _DescriptionBottom(): lng.Component;
}
