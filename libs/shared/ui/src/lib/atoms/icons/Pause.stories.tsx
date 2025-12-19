import {Meta, StoryObj} from  '@storybook/react-vite'
import {Pause} from './Pause'

const meta: Meta<typeof Pause> = {
  title: 'Atoms/Icons/Pause',
  component: Pause,
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