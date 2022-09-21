import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import Badge from '../../elements/Badge';

type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type TextContent =
  | string
  | { text: string; style: string | Record<string, unknown> };

type FlexItem = {
  grow?: number;
  shrink?: number;
  alignSelf?:
    | 'auto'
    | 'normal'
    | 'self-start'
    | 'self-end'
    | 'flex-start'
    | 'center'
    | 'baseline'
    | 'stretch'
    | 'safe'
    | 'unsafe';
  order?: unknown;
  'flex-basis'?: unknown;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  margin?: number;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
};

export interface InlineContentStyles {
  textY: number;
  iconW: number;
  iconH: number;
  contentSpacing: number;
  marginBottom: number;
  textStyle: lng.textures.TextTexture.Settings;
  maxLines: number;
  justify: justifyContent;
}

declare const InlineContent_base: WithThemeStylesConstructor<
  typeof Base,
  InlineContentStyles
>;

export default class InlineContent extends InlineContent_base {
  content?: TextContent[];
  contentProperties?: FlexItem;
  textStyle?: lng.textures.TextTexture.Settings;
  justify?: justifyContent;
  iconW?: number;
  iconH?: number;
  iconY?: number;
  textY?: number;
  badgeY?: number;
  contentSpacing?: number;
  badgeProperties?: Partial<Badge>;
  contentWrap?: boolean;
  textStyles?: Record<string, unknown>;
}
