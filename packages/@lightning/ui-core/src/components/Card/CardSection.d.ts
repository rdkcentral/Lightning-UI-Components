import lng from '@lightningjs/core';
import Card, { CardStyle } from './Card';
import type { StylePartial } from '../../types/lui';

export type CardSectionStyle = CardStyle & {
  iconHeight: number;
  iconWidth: number;
};

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  get style(): CardSectionStyle;
  set style(v: StylePartial<CardSectionStyle>);

  // tags
  get _Icon(): lng.Component;
}
