import React, { useCallback } from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';
import { ANNOUNCE_ID } from '../constants';

export const Announce = () => {
  const [{ announce }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
    updateGlobals({
      announce: !announce,
    }),
    [announce]
  );

  return (
    <IconButton
      key={ANNOUNCE_ID}
      active={announce}
      title="Toggle a11y announcing (voice guidance) of components"
      onClick={toggleMyTool}
    >
      <Icons icon="speaker" />
    </IconButton>
  );
};
