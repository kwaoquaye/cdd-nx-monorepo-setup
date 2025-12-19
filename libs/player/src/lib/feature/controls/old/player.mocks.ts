import { Track, PlaybackState, PlaybackControls } from '@pertunes/player';

export const mockTrack: Track = {
  id: '1',
  title: 'Shape of You',
  artist: 'Ed Sheeran',
  album: '÷ (Divide)',
  duration: 233,
  coverArt: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Album',
  isExplicit: false,
};

export const mockExplicitTrack: Track = {
  id: '2',
  title: 'HUMBLE.',
  artist: 'Kendrick Lamar',
  album: 'DAMN.',
  duration: 177,
  coverArt: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Album+2',
  isExplicit: true,
};

export const mockPlaylist: Track[] = [
  mockTrack,
  mockExplicitTrack,
  {
    id: '3',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: 200,
    coverArt: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Album+3',
    isExplicit: false,
  },
];

export const mockPlaybackState: PlaybackState = {
  isPlaying: false,
  currentTrack: mockTrack,
  position: 45,
  duration: 233,
  volume: 75,
  shuffle: false,
  repeat: 'off',
  queue: mockPlaylist,
  previousTracks: [],
};

export const mockPlayingState: PlaybackState = {
  ...mockPlaybackState,
  isPlaying: true,
  position: 120,
};

export const mockEmptyState: PlaybackState = {
  isPlaying: false,
  currentTrack: null,
  position: 0,
  duration: 0,
  volume: 50,
  shuffle: false,
  repeat: 'off',
  queue: [],
  previousTracks: [],
};

export const createMockControls = (
  overrides?: Partial<PlaybackControls>,
): PlaybackControls => ({
  play: () => console.log('Play clicked'),
  pause: () => console.log('Pause clicked'),
  next: () => console.log('Next clicked'),
  previous: () => console.log('Previous clicked'),
  seek: (position: number) => console.log('Seek to:', position),
  setVolume: (volume: number) => console.log('Volume set to:', volume),
  toggleShuffle: () => console.log('Shuffle toggled'),
  toggleRepeat: () => console.log('Repeat toggled'),
  ...overrides,
});
