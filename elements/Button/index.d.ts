import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
export interface ButtonStyles {
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingXNoTitle: number;
  titlePadding: number;
  prefixPadding: number;
  suffixPadding: number;
  prefixH: number;
  suffixH: number;
  textStyle: string | Record<string, any>;
  contentColor: string;
}

declare const Button_base: WithThemeStylesConstructor<
  typeof Base,
  ButtonStyles
>;

export default class Button extends Button_base {
  fixed?: boolean;
  justify?: 'center' | 'left' | 'right';
  prefix?: object | Array<lng.Component>;
  suffix?: object | Array<lng.Component>;
  title?: string;
}

export class ButtonSmall extends Button {}
