import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface TabBarStyles {
  tabsMarginBottom?: number;
  tabSpacing?: number;
}

declare const TabBar_base: WithThemeStylesConstructor<
  typeof Base,
  TabBarStyles
>;

type resolvedTab = lng.__ComponentPatchObj | lng.Component;
export default class TabBar extends TabBar_base {
  alphaSelectedTab?: boolean;
  collapse?: boolean;
  reset?: boolean;
  tabs?: Array<resolvedTab | Promise<resolvedTab>>;
  wrapSelected?: boolean;
}
