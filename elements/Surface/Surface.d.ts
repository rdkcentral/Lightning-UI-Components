import type Base from '../../Base';

export interface SurfaceStyles {
  backgroundColorDisabled: string;
  backgroundColorFocused: string;
  backgroundColorUnfocused: string;
  radius: number;
}

export default class Surface extends Base {
  style?: SurfaceStyles;
}
