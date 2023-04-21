import { Story, Meta } from '@storybook/react'

import Category, { CategoryProps } from '.'

export default {
  component: Category,
  title: 'Category',
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Category',
    seeMore: false,
  },
} as Meta<CategoryProps>

export const Basic: Story<CategoryProps> = (args) => <Category {...args} />
