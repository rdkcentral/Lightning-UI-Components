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
