import React, { useState, useEffect } from 'react';
import lng from '@lightningjs/core';
import { THEMEPANEL_ID } from './constants';
import { ColorControl, NumberControl } from '@storybook/components';
import { getValidColor, getHexColor } from '../../Styles/Colors';
import { useGlobals } from '@storybook/api';
import {
  globalContext,
  colorUpdate,
  getPanelsTheme,
  updateGlobalTheme
} from '../utils';
import { Table, TableRow } from './components';

function Colors() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const theme = getPanelsTheme();
  const colors = theme.colors;
  const rows = Object.keys(colors).map(c => {
    // if using the base theme JSON, this might be an array of color and hex values,
    // otherwise, if using the context, this may be the already formatted color
    const color = Array.isArray(colors[c])
      ? getHexColor(colors[c][0], colors[c][1])
      : getValidColor(colors[c]);
    // color picker cannot be passed Hex color with alpha, so need to convert to RGBA
    const rgbaColor = lng.StageUtils.getRgbaString(color);
    return (
      <TableRow
        key={c + LUITheme}
        label={c}
        control={
          <ColorControl
            key={`${LUITheme}-Color-${c}`}
            name={c}
            onChange={val => colorUpdate(c, val, updateGlobals)}
            value={rgbaColor}
          />
        }
      />
    );
  });
  return <>{rows}</>;
}

const radiusUpdate = (name, value, updateGlobals) => {
  updateGlobalTheme({ radius: { [name]: value } }, updateGlobals);
};

function Radius() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const theme = getPanelsTheme();
  const radius = theme.radius;
  const rows = Object.keys(radius).map(r => {
    return (
      <TableRow
        key={r + LUITheme}
        label={r}
        control={
          <NumberControl
            key={`${LUITheme}-Radius-${r}`}
            name={r}
            onChange={val => radiusUpdate(r, val, updateGlobals)}
            value={parseInt(radius[r])}
            min={0}
          />
        }
      />
    );
  });
  return <>{rows}</>;
}

const ThemePanel = ({ active }) => {
  const [listenersSet, updateListenersSet] = useState();
  const [themeVersion, updateThemeVersion] = useState(new Date().valueOf());
  useEffect(() => {
    const context = globalContext();
    if (context && !listenersSet) {
      context.on('themeUpdate', () => updateThemeVersion(new Date().valueOf()));
      updateListenersSet(true); // Make sure this is only run once
    }
  });

  return (
    <div
      className="theme-panel-wrapper"
      style={active ? {} : { display: 'none' }}
    >
      <div key={THEMEPANEL_ID} className="theme-panel-controls">
        <h1>Current Theme: {getPanelsTheme().name}</h1>
        <Table
          title="Global Theme Color Values"
          key={'color' + themeVersion}
          rows={<Colors />}
        />
        <Table
          title="Global Theme Radius Values"
          key={'radius' + themeVersion}
          rows={<Radius />}
        />
      </div>
    </div>
  );
};

export default params => {
  return <ThemePanel key="ThemePanel" active={params.active} />;
};
