import Button, { ButtonStyles } from '../../elements/Button';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

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

export interface ListItemBaseStyles extends ButtonStyles {
  descriptionColor: number;
  descriptionStyle?: TextStyleType;
  titleColor: number;
  titleStyle?: TextStyleType;
}

declare const ListItem_base: WithThemeStylesConstructor<
  typeof Button,
  ListItemBaseStyles
>;

export declare class ListItemBaseThemed extends ListItem_base {
  description?: string;
}
