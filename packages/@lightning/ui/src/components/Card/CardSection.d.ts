import lng from '@lightningjs/core';
import Card, { CardStyles } from './Card';
import type { StylePartial } from '@lightning/ui-core';

export type CardSectionStyles = CardStyles & {
  iconHeight: number;
  iconWidth: number;
};

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  get style(): CardSectionStyles;
  set style(v: StylePartial<CardSectionStyles>);

  // tags
  get _Icon(): lng.Component;
}
