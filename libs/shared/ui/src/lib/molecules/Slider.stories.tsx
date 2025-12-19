import {Meta, StoryObj} from "@storybook/react-vite"

import {Slider} from "./Slider"

const meta: Meta<typeof Slider> = {
  title: "Shared/Slider",
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    value: 50,
    onChange: (value) => console.log(value),
  },
}
