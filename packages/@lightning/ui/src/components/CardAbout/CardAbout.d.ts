import CardTitle, { CardTitleStyles } from '../Card/CardTitle';
import {
  InlineContentStyles,
  TextContent
} from '@lightning/ui-core/src/components/InlineContent/InlineContent';
import type { StylePartial, TextBoxStyles } from '@lightning/ui-core';

export type CardAboutStyles = CardTitleStyles & {
  contentSpacing: number;
  descriptionTextStyle: TextBoxStyles;
  paddingFirstLine: number;
  paddingVertical: number;
  inlineContentStyle: InlineContentStyles;
  titleTextStyle: TextBoxStyles;
};

export default class CardAbout extends CardTitle {
  iconLeft?: TextContent;
  iconRight?: TextContent;
  textLeft?: TextContent;
  textRight?: TextContent;
  get style(): CardAboutStyles;
  set style(v: StylePartial<CardAboutStyles>);
}
