import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type TabBarStyles = {
  tabsMarginBottom: number;
  tabSpacing: number;
};

type ResolvedTab =
  | lng.Component.NewPatchTemplate<typeof lng.Component>
  | lng.Component;

export default class TabBar extends Base {
  alphaSelectedTab?: boolean;
  collapse?: boolean;
  reset?: boolean;
  tabs?: Array<ResolvedTab | Promise<ResolvedTab>>;
  wrapSelected?: boolean;
  get style(): TabBarStyles;
  set style(v: StylePartial<TabBarStyles>);
}
