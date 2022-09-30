import lng from '@lightningjs/core';
import CardTitle, { CardTitleStyles } from './CardTitle';

export interface CardPersonalityStyles extends CardTitleStyles {
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
  titleTextProperties?: lng.textures.TextTexture.Settings;
}

export default class CardPersonality extends CardTitle {
  style: CardPersonalityStyles;
  src: string;
}
