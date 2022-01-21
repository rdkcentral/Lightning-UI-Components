import { globalContext } from '../utils';
import { TabButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { THEMEPICKER_ID, THEMES } from './constants';
import { useGlobals } from '@storybook/api';
import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils';

function updateTheme(theme, updateGlobals) {
  globalContext().setTheme(THEMES[theme] || {}); // If no theme is found it means that the base theme should be set
  if (updateGlobals) updateGlobals({ LUITheme: theme });
}

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
      updateTheme(LUITheme);
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
            title: capitalizeFirstLetter(theme),
            onClick() {
              updateTheme(theme.toLowerCase(), updateGlobals);
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
