import lng from '@lightningjs/core';
import { ArtworkStyles } from '../Artwork';
import { BadgeStyles } from '../Badge';
import { CheckboxStyles } from '../Checkbox';
import { LabelStyles } from '../Label';
import { MetadataBaseStyles } from '../MetadataBase/MetadataBase';
import { ProgressBarStyles } from '../ProgressBar';
import type { StylePartial } from '../../types/lui';
import Surface, { SurfaceStyles } from '../Surface';

export type TileStyles = SurfaceStyles & {
  animationEntrance: Record<string, unknown>;
  animationExit: Record<string, unknown>;
  artworkStyles: ArtworkStyles;
  badgeStyles: BadgeStyles;
  checkboxStyles: CheckboxStyles;
  labelStyles: LabelStyles;
  metadataStyles: MetadataBaseStyles;
  paddingX: number | string;
  paddingY: number | string;
  paddingYProgress: number | string;
  progressBarStyles: ProgressBarStyles;
  radius: lng.Tools.CornerRadius | string;
};

// Utility type to get a PatchTemplate by Component constructor.
// TODO: Replace this with an official version from Lightning when one exists
// type PatchTemplate<T extends lng.Element.Constructor> =
//   lng.Element.PatchTemplate<lng.Element.ExtractTemplateSpec<InstanceType<T>>>;

export default class Tile extends Surface {
  // TODO: Replace value with PatchTemplate<typeof Artwork> when the Component template specs are created
  artwork?: Record<string, unknown>;
  badge?: Record<string, unknown>;
  checkbox?: Record<string, unknown>;
  label?: Record<string, unknown>;
  metadataLocation?: string;
  metadata?: MetadataBaseStyles;
  persistentMetadata?: boolean;
  progressBar?: Record<string, unknown>;
  get style(): TileStyles;
  set style(v: StylePartial<TileStyles>);
}
