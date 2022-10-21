import Button from '../../elements/Button';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface InputStyles {
  cursorStyles: object;
  eyebrowTextStyle: object;
  helpTextStyle: object;
  minWidth: number;
  paddingX: number;
  paddingY: number;
}
declare const Input_base: WithThemeStylesConstructor<typeof Button, Input>;

export default class Input extends Button {
  actualTitle?: string;
  cursor: string;
  eyebrow?: string;
  helpText?: string;
  listening: boolean;
  mask?: string;
  password?: boolean;
  position?: number;
}
