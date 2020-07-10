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
  }
  return (
    <IconButton onClick={useCallback(toggleInspector)} active={active} title="Toggle Lightning Inspector">
      <Icons icon="lightning" />
    </IconButton>
  );
}

addons.register(ADDON_ID, api => {
  const render = () => (
    <Inspector />
  );
  const title = 'Lightning Inspector';

  addons.add(PANEL_ID, {
    type: types.TOOL,
    title,
    render,
  });
});
