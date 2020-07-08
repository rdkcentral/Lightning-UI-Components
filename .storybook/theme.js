import { create } from '@storybook/theming/create';
import brand from './brand.png';

export default create({
  base: 'dark',

  appBg: 'rgb(33,	35,	42)',
  textColor: 'white',
  brandTitle: 'Lightning UI Components',
  brandUrl: 'https://github.comcast.com/Lightning/lightning-ui',
  brandImage: brand,
});