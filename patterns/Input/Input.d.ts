import Button from '../../elements/Button';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface InputStyles {
  cursorStyles: object;
  eyebrowColor: string;
  helpTextColor: string;
  minWidth: number;
  paddingX: number;
  paddingY: number;
  suffixPadding: number;
  supportTextStyle: string;
  titleWrapperX: number;
}
declare const Input_base: WithThemeStylesConstructor<typeof Button, Input>;

export default class Input extends Button {
  cursor?: number;
  eyebrow?: string;
  helpText?: string;
  listening: boolean;
  position?: number;
}
