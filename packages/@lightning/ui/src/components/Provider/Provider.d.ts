import type lng from '@lightningjs/core';
import type { Color, StylePartial } from '@lightning/ui-core';
import type { TextBoxStyles, Base } from '@lightning/ui'

export type ProviderStyles = {
  counterBackgroundColor: Color;
  counterTextStyle: TextBoxStyles;
  itemSize: number;
  itemSpacing: number;
  radius: lng.Tools.CornerRadius;
};

export default class Provider extends Base {
  disableRadius?: boolean;
  counterText?: string;
  providers: Array<Record<string, unknown>>;
  visibleCount: number;
  get style(): ProviderStyles;
  set style(v: StylePartial<ProviderStyles>);
}