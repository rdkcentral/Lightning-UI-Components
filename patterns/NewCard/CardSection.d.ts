import NewCard from './NewCard';

export interface CardSectionStyles extends NewCard {
  iconHeight?: number;
  iconWidth?: number;
}

export default class CardSection extends NewCard {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  styles?: CardSectionStyles;
}
