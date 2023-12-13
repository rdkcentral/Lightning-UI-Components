import React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { Button } from '@storybook/components';
import { setGlobalTheme } from '../../utils/themeUtils';

// TODO: add style to button to properly align in table
// NOTE: New Feature to reset panel control values
/**
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  const [{ LUITheme }, updateGlobals] = useGlobals();
  /**
   * handles resetting globals && controls??
   */
  const handleReset = () => {
    //FIXME: resets to Base but needs logic to set to what ever theme is selected in ThemePicker
    return setGlobalTheme('base', updateGlobals);
  };

  return (
    <>
      <Button small outline label="reset-panel" onClick={handleReset}>
        Reset Styles
      </Button>
    </>
  );
}
