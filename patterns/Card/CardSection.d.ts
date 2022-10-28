import Card, { CardStyles } from './Card';
import type { StylePartial } from '../../types/lui';

export type CardSectionStyles = CardStyles & {
  iconHeight: number;
  iconWidth: number;
};

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  get style(): CardSectionStyles;
  set style(v: StylePartial<CardSectionStyles>);
}
