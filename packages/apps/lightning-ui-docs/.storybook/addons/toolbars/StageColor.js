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

import React, { useCallback, memo, useEffect } from 'react';
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { Icons, IconButton } from '@storybook/components';
import { ADDON_ID, STAGECOLOR_ID } from '../constants';

export const StageColor = memo(function MyAddonSelector() {
  const [{ stageColor }, updateGlobals] = useGlobals();
  const api = useStorybookApi();
  const isActive = [true, 'true'].includes(stageColor);
  const toggleStage = useCallback(() => {
    updateGlobals({
      stageColor: !isActive
    });
  }, [isActive]);
  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Stage Color Toggle [0]',
      defaultShortcut: ['O'],
      actionName: 'stage color',
      showInMenu: false,
      action: toggleStage
    });
  }, [toggleStage, api]);

  return (
    <IconButton
      key={STAGECOLOR_ID}
      active={isActive}
      title="Switch stage color"
      onClick={toggleStage}
    >
      <Icons icon="paintbrush" />
    </IconButton>
  );
});
