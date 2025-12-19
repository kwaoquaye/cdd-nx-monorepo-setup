import { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { TypographyValues } from './text.variants';

const meta = {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(TypographyValues),
    },
    color: {
      control: 'select',
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'textPrimary',
        'textSecondary',
      ],
    },
  },
  render: (args) => (
    <Text {...args}>{args.children || formatText(args.type || '')}</Text>
  ),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const formatText = (type: string) => {
  return `${type.charAt(0).toUpperCase() + type.slice(1)} Text`;
};

export const Default: Story = {
  args: {
    children: 'pertunes Text',
    type: 'textMedium',
  },
};

export const Example: Story = {
  args: {},
};
