import lng from '@lightningjs/core';
import CardTitle, { CardTitleStyles } from './CardTitle';
import type { StylePartial, TextBoxStyles } from '@lightning/ui-core';

export type CardPersonalityStyles = CardTitleStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardPersonality extends CardTitle {
  src: string;
  get style(): CardPersonalityStyles;
  set style(v: StylePartial<CardPersonalityStyles>);

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _Tile(): lng.Component;
}
