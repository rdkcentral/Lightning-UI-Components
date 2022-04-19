import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface SurfaceStyles {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  radius?: number;
}

declare const Surface_base: WithThemeStylesConstructor<
  typeof Base,
  SurfaceStyles
>;

export default class Surface extends Surface_base {
  style?: SurfaceStyles;
}
