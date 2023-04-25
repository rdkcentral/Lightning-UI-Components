import type { StylePartial } from '../../types/lui';
import CardTitle, { CardTitleStyle } from '../Card/CardTitle';

// What are the requirements for the CardRadioStyle?
export type CardRadioStyle = CardTitleStyle & {

};

export default class CardRadio extends CardTitle {
  //add public class methods here
  get style(): CardRadioStyle;
  set style(v: StylePartial<CardRadioStyle>);


  //add all component tags here
}
