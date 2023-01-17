import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type GridOverlayStyles = {
  propertyTextStyle: TextBoxStyles;
  valueTextStyle: TextBoxStyles;
};

export default class GridOverlay extends Base {
  showColumns?: boolean;
  showGutters?: boolean;
  showMargins?: boolean;
  showSafe?: boolean;
  showText?: boolean;
  get style(): GridOverlayStyles;
  set style(v: StylePartial<GridOverlayStyles>);

  // tags
  get _Columns(): lng.Component;

  get _Gutters(): lng.Component;
  get _GutterHorizontal(): lng.Component;

  get _Margins(): lng.Component;
  get _MarginHorizontal(): lng.Component;
  get _MarginLeft(): lng.Component;
  get _MarginRight(): lng.Component;
  get _MarginVertical(): lng.Component;
  get _MarginTop(): lng.Component;

  get _Safe(): lng.Component;
  get _SafeBottom(): lng.Component;
  get _SafeHorizontal(): lng.Component;
  get _SafeLeft(): lng.Component;
  get _SafeRight(): lng.Component;
  get _SafeTop(): lng.Component;
  get _SafeVertical(): lng.Component;

  get _TextColumnCount(): lng.Component;
  get _TextGutterY(): lng.Component;
  get _TextMarginX(): lng.Component;
  get _TextMarginY(): lng.Component;
  get _TextPanel(): lng.Component;
  get _TextSafe(): lng.Component;
  get _TextScreenH(): lng.Component;
  get _TextScreenW(): lng.Component;
}
