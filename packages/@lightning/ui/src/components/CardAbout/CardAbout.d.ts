import lng from '@lightningjs/core';
import {
  CardTitle,
  CardTitleStyle,
  StylePartial,
  TextBoxStyle
} from '@lightning/ui-core';
import {
  InlineContentStyle,
  TextContent
} from '@lightning/ui-core/src/components/InlineContent/InlineContent';

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
  textLeft?: number; // must be in range of 1 to 100
  textRight?: number; // must be in range of 1 to 100
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
