import type lng from '@lightningjs/core';
import type {
  Base,
  Color,
  StylePartial,
  TextBoxStyles
} from '@lightning/ui-core';

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

  // tags
  get _Row(): lng.Component;
}
