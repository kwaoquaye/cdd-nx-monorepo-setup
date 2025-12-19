import {Meta, StoryObj} from  '@storybook/react-vite'
import {RepeatOne} from './RepeatOne'

const meta: Meta<typeof RepeatOne> = {
  title: 'Atoms/Icons/RepeatOne',
  component: RepeatOne,
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