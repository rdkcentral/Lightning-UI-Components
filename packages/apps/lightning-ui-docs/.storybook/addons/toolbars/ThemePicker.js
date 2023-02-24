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

import { setGlobalTheme } from '../../utils/themeUtils';
import { TabButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { THEMEPICKER_ID, THEMES } from '../constants';
import { useGlobals } from '@storybook/api';
import React, { useState, useEffect } from 'react';
import { utils } from '@lightningjs/ui-components';

export default () => {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const [tooltipLinks, updateTooltipLinks] = useState([]);
  const [firstLoad, updateFirstLoad] = useState(true);
  useEffect(() => {
    if (!LUITheme) return; // LUITheme is not set until the iframe has first been loaded in preview.js
    if (firstLoad && 'custom' === LUITheme) {
      // When the page is refreshed custom theme is not stored from previous session so will fallback to base
      updateGlobals({ LUITheme: 'base' });
      return;
    } else if (firstLoad && 'base' !== LUITheme) {
      setGlobalTheme(LUITheme);
    }

    updateFirstLoad(false); // Makes sure the block above only runs once
    updateTooltipLinks(
      ['base', ...Object.keys(THEMES), 'custom']
        .filter(theme => ('custom' === LUITheme ? theme : 'custom' !== theme))
        .map((theme, idx) => {
          const active = theme.toLowerCase() === LUITheme;
          return {
            active,
            id: idx,
            title: utils.capitalizeFirstLetter(theme),
            onClick() {
              setGlobalTheme(theme.toLowerCase(), updateGlobals);
            }
          };
        })
    );
  }, [LUITheme]);

  return (
    <div>
      <WithTooltip
        placement="bottom"
        trigger="click"
        tooltip={<TooltipLinkList links={tooltipLinks} />}
      >
        <TabButton key={THEMEPICKER_ID} title="Theme">
          Theme
        </TabButton>
      </WithTooltip>
    </div>
  );
};
