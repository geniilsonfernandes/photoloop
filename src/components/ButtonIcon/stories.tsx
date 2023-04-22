import { Meta, Story } from '@storybook/react'
import { MdFavoriteBorder } from 'react-icons/md'
import ButtonIcon from '.'

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
  args: {
    children: <MdFavoriteBorder size={24} />,
  },
} as Meta

export const Basic: Story = (args) => <ButtonIcon {...args} />
