import { __TextType } from '@lightningjs/core';
import Card from '../Card/Card';

export interface CardAboutStackedStyles extends Card {
  descriptionTextProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export class CardAboutStacked extends Card {
  contentBottom?: object;
  descriptionBottom?: string;
  titleBottom?: string;
  styles?: CardAboutStackedStyles;
}
