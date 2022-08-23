import Card from './Card';

export interface CardSectionStyles extends Card {
  iconHeight?: number;
  iconWidth?: number;
}

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  styles?: CardSectionStyles;
}
