import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type GridOverlayStyles = {
  propertyTextStyle: TextBoxStyles;
  valueTextStyle: TextBoxStyles;
};

export default class GridOverlay extends Base {
  showColumns?: boolean;
  showMargins?: boolean;
  showSafe?: boolean;
  showGutters?: boolean;
  showText?: boolean;
  get style(): GridOverlayStyles;
  set style(v: StylePartial<GridOverlayStyles>);
}
