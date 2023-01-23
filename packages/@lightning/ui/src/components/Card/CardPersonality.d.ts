import lng from '@lightningjs/core';
import CardTitle, { CardTitleStyle} from './CardTitle';
import type { StylePartial, TextBoxStyle } from '@lightning/ui-core';

export type CardPersonalityStyle = CardTitleStyle& {
  descriptionTextStyle: TextBoxStyle;
};

export default class CardPersonality extends CardTitle {
  src: string;
  get style(): CardPersonalityStyle;
  set style(v: StylePartial<CardPersonalityStyle>);

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _Tile(): lng.Component;
}
