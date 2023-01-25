import lng from '@lightningjs/core';
import { StylePartial, TextBoxStyle } from '@lightning/ui-core';
import {
  InlineContentStyle,
  TextContent
} from '@lightning/ui-core/src/components/InlineContent/InlineContent';
import CardTitle, { CardTitleStyle } from '../Card/CardTitle';

export type CardAboutStyle = CardTitleStyle & {
  contentSpacing: number;
  descriptionTextStyle: TextBoxStyle;
  paddingFirstLine: number;
  paddingVertical: number;
  inlineContentStyle: InlineContentStyle;
  titleTextStyle: TextBoxStyle;
};

export default class CardAbout extends CardTitle {
  iconLeft?: TextContent;
  iconRight?: TextContent;
  textLeft?: TextContent;
  textRight?: TextContent;
  get style(): CardAboutStyle;
  set style(v: StylePartial<CardAboutStyle>);

  // tags
  /**
   * a _Details tag exists on this interface because it's removed
   * at runtime in the JS and I'm unsure how to represent this in TS
   */
  get _LeftIconTextContainer(): lng.Component;
  get _RightIconTextContainer(): lng.Component;
}
