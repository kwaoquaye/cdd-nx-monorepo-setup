import {Meta, StoryObj} from '@storybook/react-vite';

import {NowPlaying} from './NowPlaying';

const meta = {
  title: 'feature/Now Playing',
  component: NowPlaying,
} satisfies Meta<typeof NowPlaying>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};