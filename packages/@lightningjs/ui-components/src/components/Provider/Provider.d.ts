import type lng from '@lightningjs/core';
import Base from '../Base';
import { TextBoxStyle } from '../TextBox';
import type { Color, StylePartial } from '../../types/lui';

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
