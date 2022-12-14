import React from 'react';
import { addons, types } from '@storybook/addons';
import * as ids from '../constants';
import { ThemeDownload } from './ThemeDownload';
import ThemePicker from './ThemePicker';
import { Announce } from './Announce';
import GridOverlayPanel from './GridOverlayPanel';
import ThemePanel from './ThemePanel';
import ComponentStylesPanel from './ComponentStylesPanel';
import { StageColor } from './StageColor';

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

addons.register(ids.STAGECOLOR_ID, () => {
  addons.add(ids.STAGECOLOR_ID, {
    type: types.TOOL,
    title: 'Stage Color',
    render: StageColor
  });
});

addons.register(ids.GRIDOVERLAY_ID, () => {
  addons.add(ids.GRIDOVERLAY_ID, {
    type: types.PANEL,
    title: 'Grid Layout Overlay',
    render: params => GridOverlayPanel(params)
  });
});

addons.register(ids.COMPONENTSTYLES_ID, api => {
  addons.add(ids.COMPONENTSTYLES_ID, {
    type: types.PANEL,
    title: 'Component Style Theme Values',
    render: params => ComponentStylesPanel(params, api)
  });
});

addons.register(ids.THEMEPANEL_ID, () => {
  addons.add(ids.THEMEPANEL_ID, {
    type: types.PANEL,
    title: 'Global Theme Values',
    render: ({ key, active }) => <ThemePanel key={key} active={active} />
  });
});
