import { Meta, StoryObj } from '@storybook/react-vite';
import { PlayerControls } from './PlayerControls';
import { playerControlsVariants } from './variants';
import { PlayerControlsProps } from './types';
import { PlaybackProvider } from './PlaybackContext';
import { within, userEvent } from 'storybook/test';
import { Box } from '@mui/material';

const meta = {
  title: 'Player/PlayerControls',
  component: PlayerControls,
  argTypes: {
    initialState: { control: 'object' },
    compact: { control: 'boolean' },
    showVolumeControl: { control: 'boolean' },
    className: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <PlaybackProvider
        initialState={playerControlsVariants.default.initialState}
      >
        <Box
          // pb={5}
          pr={7}
          position={'fixed'}
          bottom={'40%'}
          width={'100%'}
          bgcolor={'background.paper'}
        >
          <Story />
        </Box>
      </PlaybackProvider>
    ),
  ],
} satisfies Meta<typeof PlayerControls>;

export default meta;

type Story = StoryObj<PlayerControlsProps>;

export const Default: Story = {
  args: playerControlsVariants.default,
};

export const Playing: Story = {
  render: () => {
    return <PlayerControls />;
  },
};

export const Compact: Story = {
  args: playerControlsVariants.compact,
};

export const NoTrack: Story = {
  args: playerControlsVariants.noTrack,
};

export const Interactive: Story = (args: PlayerControlsProps) => (
  <PlaybackProvider initialState={args.initialState}>
    <PlayerControls />
  </PlaybackProvider>
);
Interactive.args = {
  ...playerControlsVariants.default,
  showVolumeControl: true,
  compact: false,
  className: '',
};
Interactive.storyName = 'Interactive';
Interactive.parameters = {
  docs: {
    description: {
      story:
        'A fully interactive version of PlayerControls, mimicking real-world usage. Click buttons to toggle play/pause, shuffle, or repeat, and adjust sliders to change position or volume.',
    },
  },
};
// Interactive.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   // Simulate clicking the play/pause button (third button in IconButtonGroup)
//   const playPauseButton = canvas.getAllByRole('button')[2];
//   await userEvent.click(playPauseButton); // Toggles isPlaying

//   // Simulate clicking the shuffle button (first button)
//   const shuffleButton = canvas.getAllByRole('button')[0];
//   await userEvent.click(shuffleButton); // Toggles shuffle

//   // Simulate clicking the repeat button (fifth button)
//   const repeatButton = canvas.getAllByRole('button')[4];
//   await userEvent.click(repeatButton); // Cycles repeat mode

//   // Simulate adjusting the progress slider
//   const progressSlider = canvas.getByRole('slider', { name: /progress/i });
//   await userEvent.type(progressSlider, '{arrowright}'); // Increments position

//   // Simulate adjusting the volume slider
//   const volumeSlider = canvas.getByRole('slider', { name: /volume/i });
//   await userEvent.type(volumeSlider, '{arrowright}'); // Increments volume
// };

// ***************************************

// // libs/player/feature/controls/src/lib/PlayerControls.stories.tsx
// import type { Meta, StoryObj } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { ThemeProvider } from '@mui/material/styles';
// import { Box, CssBaseline } from '@mui/material';
// import { PlayerControls } from './old/PlayerControls';
// import {
//   mockPlaybackState,
//   mockPlayingState,
//   mockEmptyState,
//   createMockControls
// } from 'shared-testing';
// // import { theme } from '@libs/shared/ui/theme';

// const meta: Meta<typeof PlayerControls> = {
//   title: 'Player/Controls/PlayerControls',
//   component: PlayerControls,
//   parameters: {
//     layout: 'centered',
//     docs: {
//       description: {
//         component: 'Main player controls component supporting play/pause, navigation, and volume control.'
//       }
//     }
//   },
// //   decorators: [
// //     (Story) => (
// //       <ThemeProvider theme={theme}>
// //         <CssBaseline />
// //         <Box sx={{ width: 800, padding: 2 }}>
// //           <Story />
// //         </Box>
// //       </ThemeProvider>
// //     )
// //   ],
//   argTypes: {
//     compact: {
//       control: 'boolean',
//       description: 'Whether to show compact version of controls'
//     },
//     showVolumeControl: {
//       control: 'boolean',
//       description: 'Whether to show volume control slider'
//     }
//   }
// };

// export default meta;
// type Story = StoryObj<typeof PlayerControls>;

// const createInteractiveControls = () => createMockControls({
//   play: action('play'),
//   pause: action('pause'),
//   next: action('next'),
//   previous: action('previous'),
//   seek: action('seek'),
//   setVolume: action('setVolume'),
//   toggleShuffle: action('toggleShuffle'),
//   toggleRepeat: action('toggleRepeat')
// });

// export const Default: Story = {
//   args: {
//     playbackState: mockPlaybackState,
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const Playing: Story = {
//   args: {
//     playbackState: mockPlayingState,
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const Compact: Story = {
//   args: {
//     playbackState: mockPlayingState,
//     controls: createInteractiveControls(),
//     compact: true,
//     showVolumeControl: false
//   }
// };

// export const WithoutVolumeControl: Story = {
//   args: {
//     playbackState: mockPlayingState,
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: false
//   }
// };

// export const ShuffleEnabled: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       shuffle: true
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const RepeatTrack: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       repeat: 'track'
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const RepeatContext: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       repeat: 'context'
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const NoTrackSelected: Story = {
//   args: {
//     playbackState: mockEmptyState,
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const HighVolume: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       volume: 100
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const LowVolume: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       volume: 10
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };

// export const NearEndOfTrack: Story = {
//   args: {
//     playbackState: {
//       ...mockPlayingState,
//       position: 220,
//       duration: 233
//     },
//     controls: createInteractiveControls(),
//     compact: false,
//     showVolumeControl: true
//   }
// };
