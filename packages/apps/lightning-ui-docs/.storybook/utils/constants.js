import { CATEGORIES } from '../..';

/** Storybook config constants should go in this file */

export const storySortOrder = [
  CATEGORIES[1024],
  [
    'Introduction',
    'Read Me',
    'Base',
    'Contributing',
    'Lightning Resources',
    'Theming',
    [
      'Overview',
      'Theme Properties',
      'Use in Storybook',
      'Mode',
      'Tone',
      'Extensions',
      'Sub Theming',
      '*'
    ]
  ],
  CATEGORIES[2048],
  CATEGORIES[0],
  CATEGORIES[4],
  CATEGORIES[512],
  CATEGORIES[64],
  CATEGORIES[16],
  CATEGORIES[2],
  CATEGORIES[8],
  CATEGORIES[256],
  CATEGORIES[32],
  CATEGORIES[128]
];

export const controlDescriptions = {
  collapseToMetadata:
    'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the image to metadata (when focused, it will always be expanded)',
  shouldCollapse:
    'When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)',
  fixed:
    'Stops the width from being calculated dynamically based on content and will instead use the`w` property'
};
