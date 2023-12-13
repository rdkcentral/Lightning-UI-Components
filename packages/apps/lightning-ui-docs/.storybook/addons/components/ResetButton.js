import React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { Button } from '@storybook/components';
import { setGlobalTheme } from '../../utils/themeUtils';

// TODO: add style to button to properly align in table
// NOTE: New Feature to mimic controls panel reset button
/**
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  const [{ LUITheme }, updateGlobals] = useGlobals();

  /**
   * when Reset Styles button is clicked should reset panel back to base/original? theme props
   */
  const handleReset = () => {
    //TODO: create logic to reset styles in rows
    //FIXME: resets to Base, need to reset to selected original theme
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
