import { Basic } from './CardBasic.stories';
import { Hero } from './CardHero.stories';
import { Horizontal, HorizontalLarge } from './CardHorizontal.stories';
import { Vertical, VerticalLarge } from './CardVertical.stories';
import { VerticalDynamic } from './CardVerticalDynamic.stories';
import { Program } from './CardProgram.stories';
import { Launchpad } from './CardLaunchpad.stories';
import mdx from './Card.mdx';

export default {
  title: 'Patterns/Card',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export {
  Basic,
  Hero,
  Horizontal,
  HorizontalLarge,
  Launchpad,
  Program,
  Vertical,
  VerticalLarge,
  VerticalDynamic
};
