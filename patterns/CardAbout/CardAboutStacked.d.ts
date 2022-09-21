import type lng from '@lightningjs/core';
import Card, { CardStyles } from '../Card/Card';

export interface CardAboutStackedStyles extends CardStyles {
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
  titleTextProperties?: lng.textures.TextTexture.Settings;
}

export class CardAboutStacked extends Card {
  contentBottom?: object;
  descriptionBottom?: string;
  titleBottom?: string;
  style: CardAboutStackedStyles;
}
