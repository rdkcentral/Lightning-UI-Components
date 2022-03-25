import type Base from '../../Base';

export interface MarqueeStyles {
  fadeW?: number;
  shouldSmooth?: boolean;
  offset?: number;
}
export default class Marquee extends Base {
  title?: string;
  contentTexture?: Record<string, any>;
  centerAlign?: boolean;
  autostart?: boolean;
  color?: string;
  delay?: number;
  repeat?: number;
  style?: MarqueeStyles;
}
