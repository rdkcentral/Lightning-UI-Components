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

import React from 'react';
import { addons, types } from '@storybook/addons';
import * as ids from './constants';
import { Announce, StageColor, ThemeDownload, ThemePicker } from './toolbars';
import { ComponentStylesPanel, GridOverlayPanel, ThemePanel } from './panels';

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
