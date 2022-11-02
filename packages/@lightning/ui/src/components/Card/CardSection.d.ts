import type { StylePartial, Card, CardStyles } from '@lightning/ui';

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
}
