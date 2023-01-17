import lng from '@lightningjs/core';
import { StylePartial, TextBoxStyles } from '@lightning/ui-core';
import {
  InlineContentStyles,
  TextContent
} from '@lightning/ui-core/src/components/InlineContent/InlineContent';
import CardTitle, { CardTitleStyles } from '../Card/CardTitle';

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

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _LeftIconTextContainer(): lng.Component;
  get _RightIconTextContainer(): lng.Component;
}
