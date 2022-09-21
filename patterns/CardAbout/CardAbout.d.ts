import lng from '@lightningjs/core';
import Card, { CardStyles } from '../Card/Card';

export interface CardAboutStyles extends CardStyles {
  contentSpacing?: number;
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
  paddingFirstLine?: number;
  paddingVertical?: number;
  textContainerProperties?: lng.textures.TextTexture.Settings;
  titleTextProperties?: lng.textures.TextTexture.Settings;
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
