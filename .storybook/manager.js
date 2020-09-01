import { addons } from '@storybook/addons';
import { PANEL_ID } from '@storybook/addon-knobs'
import theme from './theme';

addons.setConfig({
  theme,
  selectedPanel: PANEL_ID,
  enableShorcuts: false
});
