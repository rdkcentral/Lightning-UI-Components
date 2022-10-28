import CardTitle, { CardTitleStyles } from './CardTitle';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../../elements/TextBox';

export type CardPersonalityStyles = CardTitleStyles & {
  descriptionTextStyle: TextBoxStyles;
};

export default class CardPersonality extends CardTitle {
  src: string;
  get style(): CardPersonalityStyles;
  set style(v: StylePartial<CardPersonalityStyles>);
}
