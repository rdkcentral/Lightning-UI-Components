import React from 'react';
import { addons, types } from '@storybook/addons';
import * as ids from '../constants';
import { ThemeDownload } from './ThemeDownload';
import ThemePicker from './ThemePicker';
import { Announce } from './Announce';
import ThemePanel from './ThemePanel';
import ComponentStylesPanel from './ComponentStylesPanel';

addons.register(ids.ANNOUNCE_ID, () => {
  addons.add(ids.ANNOUNCE_ID, {
    type: types.TOOL,
    title: 'Announce Toggle',
    render: Announce
  });
});

addons.register(ids.THEMEPICKER_ID, () => {
  addons.add(ids.THEMEPICKER_ID, {
    type: types.TOOL,
    title: 'Theme',
    render: ThemePicker
  });
});

addons.register(ids.DOWNLOAD_ID, () => {
  addons.add(ids.DOWNLOAD_ID, {
    type: types.TOOL,
    title: 'Download Button',
    render: ThemeDownload
  });
});

addons.register(ids.COMPONENTSTYLES_ID, (api) => {
  addons.add(ids.COMPONENTSTYLES_ID, {
    title: 'Component Style Theme Values',
    type: types.PANEL,
    render: (params) => ComponentStylesPanel(params, api)
  });
});

addons.register(ids.THEMEPANEL_ID, () => {
  addons.add(ids.THEMEPANEL_ID, {
    title: 'Global Theme Values',
    type: types.PANEL,
    render: (params) => ThemePanel(params)
  });
});
