import { __TextType } from '@lightningjs/core';
import NewCard from '../NewCards/NewCard';

export interface AboutStackedCardStyles extends NewCard {
  descriptionTextProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export class AboutStackedCard extends NewCard {
  contentBottom?: object;
  descriptionBottom?: string;
  titleBottom?: string;
  styles?: AboutStackedCardStyles;
}
