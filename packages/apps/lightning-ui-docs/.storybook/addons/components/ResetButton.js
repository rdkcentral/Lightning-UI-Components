import React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { IconButton, Icons } from '@storybook/components';
import { setGlobalTheme, globalTheme } from '../../utils/themeUtils';

/**
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  const theme = globalTheme();
  const themeName = theme.name;

  /** resets theme globals & controls */
  const handleReset = () => {
    return setGlobalTheme(themeName, updateGlobals);
  };

  return (
    <>
      <IconButton
        title="reset styles"
        label="reset-panel"
        onClick={handleReset}
      >
        <Icons icon="undo" />
      </IconButton>
    </>
  );
}
