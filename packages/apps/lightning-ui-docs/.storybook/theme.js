import { create } from '@storybook/theming/create';
import brand from './brand.png';
import { version } from '@lightning/ui/package.json';

export default create({
  base: 'dark',
  textColor: 'white',
  brandTitle: `Lightning UI Components v${version}`,
  brandUrl: 'https://github.comcast.com/Lightning/lightning-ui',
  brandImage: brand
});
