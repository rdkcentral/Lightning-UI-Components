import lng from '@lightningjs/core';
import Card, { CardStyles } from '../Card/Card';
import { InlineContentStyles } from '../../layout/InlineContent';
import type { Content } from '../../layout/InlineContent';

export interface CardAboutStyles extends CardStyles {
  contentSpacing?: number;
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
  paddingFirstLine?: number;
  paddingVertical?: number;
  inlineContentStyle?: InlineContentStyles;
  titleTextProperties?: lng.textures.TextTexture.Settings;
}

export default class CardAbout extends Card {
  iconLeft?: Content;
  iconRight?: Content;
  textLeft?: Content;
  textRight?: Content;
  style: CardAboutStyles;
}
