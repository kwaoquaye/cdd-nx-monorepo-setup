import { Meta, StoryObj } from '@storybook/react-vite';

import { TimeTrack } from './TimeTrack';
import { Slider } from '../molecules/Slider';

const meta: Meta<typeof TimeTrack> = {
  title: 'Atoms/TimeTrack',
  component: TimeTrack,
};

export default meta;

type Story = StoryObj<typeof TimeTrack>;

export const Default: Story = {
  args: {
    startTime: '00:00',
    endTime: '01:00',
    children: <Slider value={50} />,
  },
};
