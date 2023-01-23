import lng from '@lightningjs/core';
import { Base, Color, StylePartial } from '@lightning/ui-core';

export type DistractorStyle = {
  alpha1: number;
  alpha2: number;
  alpha3: number;
  circleColor: Color;
  circleSize: number;
  scale1: number;
  scale2: number;
  scale3: number;
  smoothness: number;
};

export default class Distractor extends Base {
  startAnimation(): void;
  stopAnimation(): void;
  get style(): DistractorStyle;
  set style(v: StylePartial<DistractorStyle>);

  // tags
  get _Circle1(): lng.Component;
  get _Circle2(): lng.Component;
  get _Circle3(): lng.Component;
}
