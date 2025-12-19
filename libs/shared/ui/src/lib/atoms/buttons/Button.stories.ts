import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

// ----------------------------------------------------------------------

/**
 * The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 *
 * 🔍 [Examples](https://mui.com/material-ui/react-button/)
 *
 * 📚 [API Documentation](https://mui.com/material-ui/api/button/)
 */
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

// ----------------------------------------------------------------------

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};
