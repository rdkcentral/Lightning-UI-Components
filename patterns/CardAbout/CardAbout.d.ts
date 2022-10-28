import CardTitle, { CardTitleStyles } from '../Card/CardTitle';
import { InlineContentStyles } from '../../layout/InlineContent';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../../elements/TextBox';
import type { TextContent } from '../../layout/InlineContent/InlineContent';

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
