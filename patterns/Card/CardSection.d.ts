import Card, { CardStyles } from './Card';

export interface CardSectionStyles extends CardStyles {
  iconHeight?: number;
  iconWidth?: number;
}

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  style: CardSectionStyles;
}
