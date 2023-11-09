/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { addons, types } from '@storybook/manager-api';
import theme from './theme';
import * as ids from './addons/constants';
import {
  Announce,
  StageColor,
  ThemeDownload,
  ThemePicker
} from './addons/toolbars';
import {
  ComponentStylesPanel,
  GridOverlayPanel,
  ThemePanel
} from './addons/panels';

addons.setConfig({
  theme: theme, // setting Storybook theme
  enableShortcuts: false
});

// register addons
addons.register(ids.ADDON_ID, () => {
  // Announce toggle
  addons.add(ids.ANNOUNCE_ID, {
    type: types.TOOL,
    title: 'Announce Toggle',
    match: ({ viewMode }) => viewMode === 'story', // show only in story
    render: Announce
  });
  //   // Theme Picker
  addons.add(ids.THEMEPICKER_ID, {
    type: types.TOOL,
    title: 'Theme',
    match: ({ viewMode }) => viewMode === 'story',
    render: ThemePicker
  });
  //   // Theme Download tool
  addons.add(ids.DOWNLOAD_ID, {
    type: types.TOOL,
    title: 'Download Button',
    match: ({ viewMode }) => viewMode === 'story',
    render: ThemeDownload
  });
  //   // Stage Color Toggle
  addons.add(ids.STAGECOLOR_ID, {
    type: types.TOOL,
    title: 'Stage Color',
    match: ({ viewMode }) => viewMode === 'story',
    render: StageColor
  });
  //   // Grid Overlay Panel
  addons.add(ids.GRIDOVERLAY_ID, {
    type: types.PANEL,
    title: 'Grid Layout Overlay',
    match: ({ viewMode }) => viewMode === 'story',
    render: params => GridOverlayPanel(params)
  });

  //   // Component Style Panel
  addons.add(ids.COMPONENTSTYLES_ID, {
    type: types.PANEL,
    title: 'Component Style Theme Values',
    match: ({ viewMode }) => viewMode === 'story',
    render: params => ComponentStylesPanel(params)
  });

  //   // Global Theme Panel
  addons.add(ids.THEMEPANEL_ID, {
    type: types.PANEL,
    title: 'Global Theme Values',
    match: ({ viewMode }) => viewMode === 'story',
    render: ThemePanel
  });
});
