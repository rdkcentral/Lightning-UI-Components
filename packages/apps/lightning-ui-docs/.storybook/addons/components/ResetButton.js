import React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { Button } from '@storybook/components';

// REVIEW: depending how we handle state for the theme may need to move this into default
// TODO: add style to button to properly align in table
/**
 * NOTE: New Feature to basically mimic what happens on the controls panel
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  const [{ LUITheme }, updateGlobals] = useGlobals();

  const resetPanel = rows => {
    //TODO: create logic to reset styles in rows

    return updateGlobals({ LUITheme: 'base' });
  };
  return (
    <>
      <Button small outline label="reset-panel" onClick={resetPanel}>
        Reset Styles
      </Button>
    </>
  );
}
