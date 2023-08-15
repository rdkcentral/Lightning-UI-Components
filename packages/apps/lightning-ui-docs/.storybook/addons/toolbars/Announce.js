﻿/**
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

import React, { memo, useCallback, useEffect } from 'react';
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { Icons, IconButton } from '@storybook/components';
import { ADDON_ID, ANNOUNCE_ID } from '../constants';

export const Announce = memo(function MyAddonSelector() {
  const [{ announce }, updateGlobals] = useGlobals();
  const api = useStorybookApi();
  console.log('announce', announce);
  const isActive = [true, 'true'].includes(announce);
  const toggleAnnounce = useCallback(() => {
    updateGlobals({
      announce: !isActive
    });
  }, [isActive]);

  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Announce Toggle [0]',
      actionName: 'Announce',
      action: toggleAnnounce
    });
  }, [toggleAnnounce, api]);

  return (
    <IconButton
      key={ANNOUNCE_ID}
      active={isActive}
      title="Toggle a11y announcing (voice guidance) of components"
      onClick={toggleAnnounce}
    >
      <Icons icon="speaker" />
    </IconButton>
  );
});
