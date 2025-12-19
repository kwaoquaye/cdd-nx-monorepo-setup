import {Meta, StoryObj} from  '@storybook/react-vite'
import {PlayArrow} from './PlayArrow'

const meta: Meta<typeof PlayArrow> = {
  title: 'Atoms/Icons/PlayArrow',
  component: PlayArrow,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'action',
  },
};
export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};