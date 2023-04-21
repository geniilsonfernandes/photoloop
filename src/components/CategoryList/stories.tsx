import { Story, Meta } from '@storybook/react'

import CategoryList from '.'

export default {
  component: CategoryList,
  title: 'CategoryList',
} as Meta

export const Basic: Story = () => (
  <>
    <CategoryList />
    <CategoryList />
    <CategoryList />
  </>
)
