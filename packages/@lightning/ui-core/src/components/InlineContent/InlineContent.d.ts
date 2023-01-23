import lng from '@lightningjs/core';
import Badge from '../Badge';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type ContentBase = {
  title?: string;
  announce?: string;
  style?: string | Record<string, unknown>;
};

export type TextContent =
  | string
  | (ContentBase & ({ text: string } | { icon: string } | { badge: string }));

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

export type InlineContentStyle = {
  textY: number;
  iconW: number;
  iconH: number;
  contentSpacing: number;
  marginBottom: number;
  textStyle: lng.textures.TextTexture.Settings;
  maxLines: number;
  justify: JustifyContent;
};

export default class InlineContent extends Base {
  content?: TextContent[];
  contentProperties?: FlexItem;
  badgeY?: number;
  badgeProperties?: Partial<Badge>;
  justify?: JustifyContent;
  contentWrap?: boolean;
  customStyleMappings?: Record<string, unknown>;
  get style(): InlineContentStyle;
  set style(v: StylePartial<InlineContentStyle>);
}
