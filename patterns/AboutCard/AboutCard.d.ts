import { __TextType } from '@lightningjs/core';
import NewCard from '../NewCards/NewCard';

export interface AboutCardStyles extends NewCard {
  contentSpacing?: number;
  descriptionTextProperties?: __TextType;
  paddingFirstLine?: number;
  paddingVertical?: number;
  textContainerProperties?: __TextType;
  titleTextProperties?: __TextType;
}

export default class AboutCard extends NewCard {
  iconHeight?: number;
  iconLeft?: string;
  iconRight?: string;
  iconWidth?: number;
  textLeft?: string;
  textRight?: string;
  styles?: AboutCardStyles;
}
