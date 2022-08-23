import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import type { CheckboxStyles } from '../Checkbox';
import type { IconStyles } from '../Icon';

type validTextStrings =  // this might need to just be string
  | 'display1'
  | 'display2'
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'button1'
  | 'button2'
  | 'callout1'
  | 'caption';

type __lngTextTextureType = Record<string, unknown>;

type TextStyleType = validTextStrings | __lngTextTextureType;

type ButtonCheckboxProps = {
  checked: boolean;
};

export interface ButtonStyles {
  backgroundColorFocused: number;
  backgroundColorUnfocused: number;
  backgroundColorDisabled: number;
  fontOffsetY: number;
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingY: number;
  prefixMargin: number;
  radius: number;
  textColorFocused: number;
  textColorUnfocused: number;
  textColorDisabled: number;
  textStyle: TextStyleType;
  prefixStyle: {
    w: number;
    h: number;
    iconColor: number;
    colorFocused: number;
    checkedBackgroundColor: number;
    [otherStyles: string]: unknown;
  };
}

declare const Button_base: WithThemeStylesConstructor<
  typeof Base,
  ButtonStyles
>;

export default class Button extends Button_base {
  checkbox?: ButtonCheckboxProps;
  disabled?: boolean;
  fixed?: boolean;
  icon?: string;
  justify?: 'center' | 'left' | 'right';
  prefixStyle?: IconStyles | CheckboxStyles;
  title?: string;
}

export class ButtonSmall extends Button {}
