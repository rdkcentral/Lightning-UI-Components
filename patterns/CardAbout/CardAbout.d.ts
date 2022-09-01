import { __TextType } from '@lightningjs/core';
import Card from '../Card/Card';

export interface CardAboutStyles extends Card {
  contentSpacing?: number;
  descriptionTextProperties?: __TextType;
  paddingFirstLine?: number;
  paddingVertical?: number;
  textContainerProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export default class CardAbout extends Card {
  iconHeight?: number;
  iconLeft?: string;
  iconRight?: string;
  iconWidth?: number;
  textLeft?: string;
  textRight?: string;
  style: CardAboutStyles;
}
