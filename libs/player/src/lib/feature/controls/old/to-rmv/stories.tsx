// libs/player/feature/controls/src/lib/player-controls.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { PlayerControls } from './player-controls';
import { PlaybackState } from '@myapp/player/data-access/playback';

const meta: Meta<typeof PlayerControls> = {
  title: 'Player/Features/Controls',
  component: PlayerControls,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Main playback controls with play/pause, skip, and volume functionality. Handles all user interactions for audio playback.',
      },
    },
  },
  argTypes: {
    playbackState: {
      control: 'select',
      options: ['playing', 'paused', 'loading', 'error'],
      description: 'Current playback state',
    },
    volume: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Volume level (0-1)',
    },
    duration: {
      control: { type: 'number', min: 0, max: 600 },
      description: 'Track duration in seconds',
    },
    currentTime: {
      control: { type: 'number', min: 0, max: 600 },
      description: 'Current playback position in seconds',
    },
    canSkipNext: {
      control: 'boolean',
      description: 'Whether next track is available',
    },
    canSkipPrevious: {
      control: 'boolean',
      description: 'Whether previous track is available',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '400px', 
        padding: '20px',
        backgroundColor: '#121212',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PlayerControls>;

// Default state - most common scenario
export const Default: Story = {
  args: {
    playbackState: 'paused',
    volume: 0.7,
    duration: 240,
    currentTime: 45,
    canSkipNext: true,
    canSkipPrevious: true,
    onPlay: () => console.log('Play clicked'),
    onPause: () => console.log('Pause clicked'),
    onNext: () => console.log('Next clicked'),
    onPrevious: () => console.log('Previous clicked'),
    onVolumeChange: (vol) => console.log('Volume changed:', vol),
    onSeek: (time) => console.log('Seek to:', time),
  },
};

// Playing state
export const Playing: Story = {
  args: {
    ...Default.args,
    playbackState: 'playing',
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls when audio is actively playing. Play button becomes pause button.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    ...Default.args,
    playbackState: 'loading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state when track is buffering or initializing.',
      },
    },
  },
};

// Error state
export const Error: Story = {
  args: {
    ...Default.args,
    playbackState: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state when playback fails. Controls are disabled.',
      },
    },
  },
};

// First track (no previous)
export const FirstTrack: Story = {
  args: {
    ...Default.args,
    canSkipPrevious: false,
    currentTime: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'First track in playlist - previous button is disabled.',
      },
    },
  },
};

// Last track (no next)
export const LastTrack: Story = {
  args: {
    ...Default.args,
    canSkipNext: false,
    currentTime: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'Last track in playlist - next button is disabled.',
      },
    },
  },
};

// Volume muted
export const VolumeMuted: Story = {
  args: {
    ...Default.args,
    volume: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Volume is muted - shows mute icon and muted state.',
      },
    },
  },
};

// Near end of track
export const NearEnd: Story = {
  args: {
    ...Default.args,
    currentTime: 235,
    duration: 240,
    playbackState: 'playing',
  },
  parameters: {
    docs: {
      description: {
        story: 'Track is nearly finished - useful for testing auto-advance behavior.',
      },
    },
  },
};

// libs/player/feature/queue/src/lib/queue-panel.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { QueuePanel } from './queue-panel';
import { Track } from '@myapp/shared/data-access/core';

const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 355,
    imageUrl: 'https://via.placeholder.com/60x60',
  },
  {
    id: '2',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    duration: 482,
    imageUrl: 'https://via.placeholder.com/60x60',
  },
  {
    id: '3',
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: 391,
    imageUrl: 'https://via.placeholder.com/60x60',
  },
];

const meta: Meta<typeof QueuePanel> = {
  title: 'Player/Features/Queue',
  component: QueuePanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Queue panel showing upcoming tracks with drag-and-drop reordering capabilities.',
      },
    },
  },
  argTypes: {
    tracks: {
      description: 'Array of tracks in the queue',
    },
    currentTrackId: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'ID of currently playing track',
    },
    isVisible: {
      control: 'boolean',
      description: 'Whether queue panel is visible',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '350px', 
        height: '400px',
        backgroundColor: '#181818',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof QueuePanel>;

export const Default: Story = {
  args: {
    tracks: mockTracks,
    currentTrackId: '1',
    isVisible: true,
    onTrackSelect: (trackId) => console.log('Track selected:', trackId),
    onTrackRemove: (trackId) => console.log('Track removed:', trackId),
    onReorder: (tracks) => console.log('Tracks reordered:', tracks),
  },
};

export const EmptyQueue: Story = {
  args: {
    tracks: [],
    currentTrackId: null,
    isVisible: true,
    onTrackSelect: () => {},
    onTrackRemove: () => {},
    onReorder: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue panel when no tracks are queued.',
      },
    },
  },
};

export const SingleTrack: Story = {
  args: {
    tracks: [mockTracks[0]],
    currentTrackId: '1',
    isVisible: true,
    onTrackSelect: () => {},
    onTrackRemove: () => {},
    onReorder: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue with only one track - reordering disabled.',
      },
    },
  },
};

export const LongQueue: Story = {
  args: {
    tracks: [
      ...mockTracks,
      ...mockTracks.map(t => ({ ...t, id: t.id + '_2' })),
      ...mockTracks.map(t => ({ ...t, id: t.id + '_3' })),
    ],
    currentTrackId: '1',
    isVisible: true,
    onTrackSelect: () => {},
    onTrackRemove: () => {},
    onReorder: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue with many tracks - tests scrolling behavior.',
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    tracks: mockTracks,
    currentTrackId: '1',
    isVisible: false,
    onTrackSelect: () => {},
    onTrackRemove: () => {},
    onReorder: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue panel in hidden state.',
      },
    },
  },
};

// libs/player/feature/mini-player/src/lib/mini-player.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { MiniPlayer } from './mini-player';
import { Track } from '@myapp/shared/data-access/core';

const mockTrack: Track = {
  id: '1',
  title: 'Bohemian Rhapsody',
  artist: 'Queen',
  album: 'A Night at the Opera',
  duration: 355,
  imageUrl: 'https://via.placeholder.com/60x60',
};

const meta: Meta<typeof MiniPlayer> = {
  title: 'Player/Features/MiniPlayer',
  component: MiniPlayer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Compact player that appears at bottom of screen. Shows current track with basic controls.',
      },
    },
  },
  argTypes: {
    track: {
      description: 'Currently playing track',
    },
    playbackState: {
      control: 'select',
      options: ['playing', 'paused', 'loading'],
    },
    currentTime: {
      control: { type: 'number', min: 0, max: 355 },
    },
    isVisible: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        position: 'relative',
        height: '100vh',
        backgroundColor: '#000',
      }}>
        <div style={{ padding: '20px', color: 'white' }}>
          <h2>Main App Content</h2>
          <p>Mini player appears at bottom</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MiniPlayer>;

export const Default: Story = {
  args: {
    track: mockTrack,
    playbackState: 'paused',
    currentTime: 45,
    isVisible: true,
    onPlay: () => console.log('Play'),
    onPause: () => console.log('Pause'),
    onNext: () => console.log('Next'),
    onPrevious: () => console.log('Previous'),
    onExpand: () => console.log('Expand to full player'),
  },
};

export const Playing: Story = {
  args: {
    ...Default.args,
    playbackState: 'playing',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    playbackState: 'loading',
  },
};

export const LongTrackTitle: Story = {
  args: {
    ...Default.args,
    track: {
      ...mockTrack,
      title: 'This is a Really Long Track Title That Should Be Truncated',
      artist: 'Artist with a Really Long Name That Also Gets Truncated',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests text truncation with long track/artist names.',
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    isVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Mini player in hidden state (no active track).',
      },
    },
  },
};

// libs/player/data-access/playback/src/lib/playback-service.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { PlaybackServiceProvider, usePlaybackService } from './playback-service';
import { Track } from '@myapp/shared/data-access/core';

// Demo component to show service in action
const PlaybackDemo = () => {
  const { 
    currentTrack, 
    playbackState, 
    currentTime, 
    duration,
    volume,
    play,
    pause,
    next,
    previous,
    setVolume,
    seek 
  } = usePlaybackService();

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#121212', 
      color: 'white',
      borderRadius: '8px'
    }}>
      <h3>Playback Service Demo</h3>
      <div style={{ marginBottom: '20px' }}>
        <strong>Current Track:</strong> {currentTrack?.title || 'None'}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>State:</strong> {playbackState}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Time:</strong> {Math.round(currentTime)}s / {Math.round(duration)}s
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Volume:</strong> {Math.round(volume * 100)}%
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={previous}>Previous</button>
        <button onClick={playbackState === 'playing' ? pause : play}>
          {playbackState === 'playing' ? 'Pause' : 'Play'}
        </button>
        <button onClick={next}>Next</button>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <label>Volume:</label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

const meta: Meta<typeof PlaybackServiceProvider> = {
  title: 'Player/Data-Access/PlaybackService',
  component: PlaybackServiceProvider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Core playback service that manages audio playback state and provides methods for controlling playback.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlaybackServiceProvider>;

export const Default: Story = {
  render: () => (
    <PlaybackServiceProvider>
      <PlaybackDemo />
    </PlaybackServiceProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo of the playback service with controls.',
      },
    },
  },
};

// Integration story showing multiple components working together
export const PlayerIntegration: Story = {
  render: () => (
    <PlaybackServiceProvider>
      <div style={{ 
        width: '600px', 
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>
            Player Components Integration
          </h2>
          <PlaybackDemo />
        </div>
      </div>
    </PlaybackServiceProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows how multiple player components integrate with the playback service.',
      },
    },
  },
};