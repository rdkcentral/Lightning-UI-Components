import { __TextType } from '@lightningjs/core';
import CardTitle from './CardTitle';

export interface CardPersonalityStyles extends CardTitle {
  descriptionTextProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export default class CardPersonality extends CardTitle {
  styles?: CardPersonalityStyles;
  src?: string;
}
