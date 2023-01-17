import lng from '@lightningjs/core';
import { Base, StylePartial } from '@lightning/ui-core';

export type BoardRowStyles = {
  itemSpacing: number;
};

export default class BoardRow extends Base {
  alwaysScroll?: boolean;
  items: Array<
    lng.Component.NewPatchTemplate<typeof lng.Component> | lng.Component
  >;
  lazyScroll?: boolean;
  menuCard: Record<string, unknown>;
  neverScroll?: boolean;
  scrollIndex?: number;
  srcCallback?: (obj: {
    closestAspectRatio: string;
    aspectRatio: string;
    src: string;
    w: number;
    h: number;
  }) => string;
  viewAll?: boolean;

  get fullyOnScreenItems(): Array<lng.Component>;
  get style(): BoardRowStyles;
  set style(v: StylePartial<BoardRowStyles>);

  // tags
  get _Layout(): lng.Component;
}
