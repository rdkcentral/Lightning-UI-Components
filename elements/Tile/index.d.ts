import type { Base } from '../../Base';
import { default as Badge, BadgeStyles } from '../Badge';
import { default as Checkbox, CheckboxStyles } from '../Checkbox';
import { Component } from '@lightning/lng-typed';
import type { default as Artwork, ArtworkStyles } from '../Artwork';
import type { default as Label, LabelStyles } from '../Label';
import type { default as ProgressBar, ProgressBarStyles } from '../ProgressBar';

export interface TileStyles {
  animationEntrance?: object;
  animationExit?: object;
  artworkFocusScale?: number;
  artworkStyles?: ArtworkStyles;
  badgeStyles?: BadgeStyles;
  checkboxStyles?: CheckboxStyles;
  focusRing?: boolean;
  getFocusScale?: function;
  getUnfocusScale?: function;
  labelStyles?: LabelStyles;
  metadataStyles?: object; // TODO: Replace with TS from MetadataTile after completed
  paddingX?: number | string;
  paddingY?: number | string;
  progressBarStyles?: ProgressBarStyles;
  radius?: number | string;
}

export declare class Tile extends Base {
  artwork?: Artwork;
  badge?: Badge;
  checkbox?: Checkbox;
  label?: Label;
  metadataLocation?: string;
  metadata?: object; // TODO: Replace with TS from MetadataTile after completed
  persistentMetadata?: boolean;
  progressBar?: ProgressBar;
  style?: TileStyles;
}
