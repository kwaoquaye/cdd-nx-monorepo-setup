import {Meta, StoryObj} from '@storybook/react-vite';
import {CardMedia} from './CardMedia';

const meta = {
  title: 'surface/Card/CardMedia',
  component: CardMedia,
//   decorators: [(Story) => (
//     <CardRoot>
//       <Story />
//     </CardRoot>
//   )],
} satisfies Meta<typeof CardMedia>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://picsum.photos/200/300',
    title: 'Card Media Title',
    sx: { 
        width: '56px',
        height: '56px',
        background: '#404040',
        borderRadius: '4px',
        marginRight: '16px',
    },

  },
};