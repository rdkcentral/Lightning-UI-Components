import lng from '@lightningjs/core';
import { MetadataBaseStyle } from '../MetadataBase';
import type { StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';

export type TileStyle = SurfaceStyle & {
  animationEntrance: Record<string, unknown>;
  animationExit: Record<string, unknown>;
  paddingX: number | string;
  paddingY: number | string;
  paddingYProgress: number | string;
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
  metadata?: MetadataBaseStyle;
  persistentMetadata?: boolean;
  progressBar?: Record<string, unknown>;
  get innerH(): number;
  get style(): TileStyle;
  set style(v: StylePartial<TileStyle>);

  // tags
  get _Artwork(): lng.Component;
  get _Content(): lng.Component;
  get _Tile(): lng.Component;
  get _Badge(): lng.Component;
  get _Checkbox(): lng.Component;
  get _Metadata(): lng.Component;
  get _ProgressBar(): lng.Component;
  get _Label(): lng.Component;
}
