import React, { Suspense, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { PlaybackProvider } from './PlaybackContext';
import { PlayerControlsProps } from './types';

// const MainControls = React.lazy(() => import('./MainControls'));
// const ProgressBar = React.lazy(() => import('./ProgressBar'));
// const VolumeControl = React.lazy(() => import('./VolumeControl'));
import { MainControls } from './MainControls';
import { ProgressBar } from './ProgressBar';
import { NowPlayingControls } from './NowPlayingControls';
import { NowPlaying } from '../now-playing/NowPlaying';

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  initialState,
  compact: initialCompact = false,
  showVolumeControl = true,
}) => {
  const [compact, setCompact] = useState(initialCompact); // Local state for UI toggle

  return (
    <PlaybackProvider initialState={initialState}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          pb: 2,
          justifyContent: 'space-between',
        }}
      >
        <NowPlaying />
        <Stack flex={1} maxWidth={680} alignItems={'center'}>
          <MainControls />
          <ProgressBar />
        </Stack>
        {/* <Suspense fallback={<Typography>Loading controls...</Typography>}>
        </Suspense> */}
        <NowPlayingControls />
      </Box>
    </PlaybackProvider>
  );
};
