import {Meta, StoryObj} from  '@storybook/react-vite'
import {NowPlaying} from './NowPlaying'

const meta: Meta<typeof NowPlaying> = {
  title: 'Atoms/Icons/NowPlaying',
  component: NowPlaying,
  // decorators:(Story)=><IconButton size='large'>{Story()}</IconButton>
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

export const Disabled: Story = {
  args: {
    disabled: true,
    color: 'disabled',
    
  },
};