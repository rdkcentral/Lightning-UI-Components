import React, { useState } from 'react';
import { Button } from '@storybook/components';

// REVIEW: depending how we handle state for the theme may need to move this into default
// TODO: add style to button to properly align in table
/**
 * NOTE: New Feature to basically mimic what happens on the controls panel
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  return (
    <>
      <Button small outline label="reset-panel" onClick={resetPanel}>
        Reset Styles
      </Button>
    </>
  );
}

// TODO: reset component panel style to default theme i.e. base
const resetPanel = rows => {
  //TODO: create logic to reset styles
  return console.log('reset panel');
};
