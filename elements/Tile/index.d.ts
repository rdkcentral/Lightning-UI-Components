import lng from '@lightningjs/core';
import Base from '../../Base';
import { default as Badge, BadgeStyles } from '../Badge';
import { default as Checkbox, CheckboxStyles } from '../Checkbox';
import { default as Artwork, ArtworkStyles } from '../Artwork';
import { default as Label, LabelStyles } from '../Label';
import { default as ProgressBar, ProgressBarStyles } from '../ProgressBar';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

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
  paddingYProgress?: number | string;
  progressBarStyles?: ProgressBarStyles;
  radius?: lng.Tools.CornerRadius | string;
}

declare const Tile_base: WithThemeStylesConstructor<typeof Base, TileStyles>;

// Utility type to get a PatchTemplate by Component constructor.
// TODO: Replace this with an official version from Lightning when one exists
type PatchTemplate<T extends lng.Element.Constructor> =
  lng.Element.PatchTemplate<lng.Element.ExtractTemplateSpec<InstanceType<T>>>;

export default class Tile extends Tile_base {
  artwork?: PatchTemplate<typeof Artwork>;
  badge?: PatchTemplate<typeof Badge>;
  checkbox?: PatchTemplate<typeof Checkbox>;
  label?: PatchTemplate<typeof Label>;
  metadataLocation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: any; // TODO: Replace with TS from MetadataTile after completed
  persistentMetadata?: boolean;
  progressBar?: PatchTemplate<typeof ProgressBar>;
  style: TileStyles;
}
