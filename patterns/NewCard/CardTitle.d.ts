import { __TextType } from '@lightningjs/core';
import NewCard from './NewCard';

export interface CardTitleStyles extends NewCard {
  descriptionTextProperties?: __TextType;
}

export default class CardTitle extends NewCard {
  styles?: CardTitleStyles;
  description?: string;
}
