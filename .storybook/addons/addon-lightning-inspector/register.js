/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

import React, { useState, useCallback } from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, Icons } from '@storybook/components';

const ADDON_ID = 'addon-lightning-inspector';
const PANEL_ID = `${ADDON_ID}/panel`;
const defaultState = window.localStorage.getItem('inspectorEnabled') || false;

const Inspector = () => {
  const [active, setActive] = useState(defaultState);
  const toggleInspector = () => {
    const iframe = window.frames['storybook-preview-iframe'] || {};
    if (active) {
      if (iframe.contentWindow) {
        iframe.contentWindow.location.reload();
      }
    } else if (iframe.contentWindow) {
      iframe.contentWindow.attachInspector(iframe.contentWindow.lng);
    }
    window.localStorage.setItem('inspectorEnabled', !active);
    setActive(active => !active);
  };
  return (
    <IconButton
      onClick={useCallback(toggleInspector)}
      active={active}
      title="Toggle Lightning Inspector"
    >
      <Icons icon="lightning" />
    </IconButton>
  );
};

addons.register(ADDON_ID, api => {
  const render = () => <Inspector />;
  const title = 'Lightning Inspector';

  addons.add(PANEL_ID, {
    type: types.TOOL,
    title,
    render
  });
});
