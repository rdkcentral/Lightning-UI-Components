import { __TextType } from '@lightningjs/core';
import Card from './Card';

export interface CardTitleStyles extends Card {
  descriptionTextProperties?: __TextType;
}

export default class CardTitle extends Card {
  style: CardTitleStyles;
  description?: string;
}
