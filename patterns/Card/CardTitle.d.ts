import type lng from '@lightningjs/core';
import Card, { CardStyles } from './Card';

export interface CardTitleStyles extends CardStyles {
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
}

export default class CardTitle extends Card {
  style: CardTitleStyles;
  description?: string;
}
