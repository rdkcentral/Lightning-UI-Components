import type lng from '@lightningjs/core';
import type {
  Base,
  Color,
  StylePartial,
  TextBoxStyle
} from '@lightning/ui-core';

export type ProviderStyle = {
  counterBackgroundColor: Color;
  counterTextStyle: TextBoxStyle;
  itemSize: number;
  itemSpacing: number;
  radius: lng.Tools.CornerRadius;
};

export default class Provider extends Base {
  disableRadius?: boolean;
  counterText?: string;
  providers: Array<Record<string, unknown>>;
  visibleCount: number;
  get style(): ProviderStyle;
  set style(v: StylePartial<ProviderStyle>);

  // tags
  get _Row(): lng.Component;
}
