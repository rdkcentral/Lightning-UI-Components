import lng from '@lightningjs/core';
import Base from '../../Base';
import { default as Badge, BadgeStyles } from '../Badge';
import { default as Checkbox, CheckboxStyles } from '../Checkbox';
import { default as Artwork, ArtworkStyles } from '../Artwork';
import { default as Label, LabelStyles } from '../Label';
import { default as ProgressBar, ProgressBarStyles } from '../ProgressBar';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface TileStyles {
  animationEntrance?: object;
  animationExit?: object;
  artworkStyles?: ArtworkStyles;
  badgeStyles?: BadgeStyles;
  checkboxStyles?: CheckboxStyles;
  labelStyles?: LabelStyles;
  metadataStyles?: object; // TODO: Replace with TS from MetadataTile after completed
  paddingX?: number | string;
  paddingY?: number | string;
  progressBarStyles?: ProgressBarStyles;
  radius?: Tools.CornerRadius | string;
}

declare const Tile_base: WithThemeStylesConstructor<typeof Base, TileStyles>;

export default class Tile extends Tile_base {
  artwork?: Omit<lng.__ComponentPatchObj<typeof Artwork>, 'type'>;
  badge?: Omit<lng.__ComponentPatchObj<typeof Badge>, 'type'>;
  checkbox?: Omit<lng.__ComponentPatchObj<typeof Checkbox>, 'type'>;
  label?: Omit<lng.__ComponentPatchObj<typeof Label>, 'type'>;
  metadataLocation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: any; // TODO: Replace with TS from MetadataTile after completed
  persistentMetadata?: boolean;
  progressBar?: Omit<lng.__ComponentPatchObj<typeof ProgressBar>, 'type'>;
  style?: TileStyles;
}
