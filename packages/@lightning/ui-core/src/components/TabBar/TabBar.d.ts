import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type TabBarStyle = {
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
  tabs?: Array<ResolvedTab | Promise<ResolvedTab> | (() => ResolvedTab)>;
  wrapSelected?: boolean;
  get style(): TabBarStyle;
  set style(v: StylePartial<TabBarStyle>);
}
