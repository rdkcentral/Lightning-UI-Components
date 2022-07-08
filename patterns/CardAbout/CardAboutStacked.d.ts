import { __TextType } from '@lightningjs/core';
import NewCard from '../NewCard/NewCard';

export interface CardAboutStackedStyles extends NewCard {
  descriptionTextProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export class CardAboutStacked extends NewCard {
  contentBottom?: object;
  descriptionBottom?: string;
  titleBottom?: string;
  styles?: CardAboutStackedStyles;
}
