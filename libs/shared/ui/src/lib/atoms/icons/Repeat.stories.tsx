import {Meta, StoryObj} from  '@storybook/react-vite'
import {Repeat} from './Repeat'

const meta: Meta<typeof Repeat> = {
  title: 'Atoms/Icons/Repeat',
  component: Repeat,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'action',
  },
};
export const Success: Story = {
  args: {
    color: 'success',
    fontSize: 'small',
  },
};
export const SuccessDisabled: Story = {
  args: {
    color: 'success',
    fontSize: 'small',
    disabled: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};