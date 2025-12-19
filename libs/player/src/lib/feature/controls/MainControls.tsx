import React from 'react';
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  RepeatOne,
} from '@pertunes/ui';
import Stack from '@mui/material/Stack';
import { usePlayback } from './PlaybackContext';

interface MainControlsProps {
  compact?: boolean;
}

export const MainControls: React.FC<MainControlsProps> = ({ compact }) => {
  const { playbackState, controls } = usePlayback();
  const { isPlaying, shuffle, repeat, currentTrack } = playbackState;

  const getRepeatIcon = () => {
    switch (repeat) {
      case 'track':
        return <RepeatOne />;
      case 'context':
        return <Repeat color="primary" />;
      default:
        return <Repeat />;
    }
  };

  // const buttons: IconButtonConfig[] = [
  //   {
  //     icon: <Shuffle />,
  //     onClick: controls.toggleShuffle,
  //     isActive: shuffle,
  //     size: 'small',
  //   },
  //   {
  //     Icon: <SkipPrevious />,
  //     onClick: controls.previous,
  //     size: 'small',
  //   },
  //   {
  //     Icon: isPlaying ? <Pause /> : <PlayArrow />,
  //     onClick: isPlaying ? controls.pause : controls.play,
  //     size: 'large',
  //     sx: {
  //       bgcolor: 'primary.main',
  //       color: 'primary.contrastText',
  //       '&:hover': { bgcolor: 'primary.dark' },
  //     },
  //   },
  //   {
  //     icon: <SkipNext />,
  //     onClick: controls.next,
  //     size: 'small',
  //   },
  //   {
  //     icon: getRepeatIcon(),
  //     onClick: controls.toggleRepeat,
  //     size: 'small',
  //   },
  // ];

  // return <IconButtonGroup buttons={buttons} isDisabled={!currentTrack} />;

  return (
    <Stack direction={'row'} alignItems={'center'}>
      <Shuffle color={shuffle ? 'success' : 'inherit'} />
      <SkipPrevious />
      {isPlaying ? (
        <Pause fontSize="medium" />
      ) : (
        <PlayArrow fontSize="medium" />
      )}
      <SkipNext />
      <Repeat color={repeat === 'context' ? 'success' : 'inherit'} />
      <RepeatOne color={repeat === 'track' ? 'success' : 'inherit'} />
    </Stack>
  );
};
