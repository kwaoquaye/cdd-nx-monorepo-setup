import { DeepWiden } from '@pertunes/shared-utils';
import { playerControlsVariants } from './variants';

export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number;
};

export type PlaybackState = DeepWiden<typeof playerControlsVariants.default.playbackState>;

export type PlaybackControls = {
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  seek: (position: number) => void;
  setVolume: (volume: number) => void;
};

export interface PlayerControlsProps {
  initialState?: Partial<PlaybackState>;
  compact?: boolean;
  showVolumeControl?: boolean;
  className?: string;
}