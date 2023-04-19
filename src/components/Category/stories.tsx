import { Story, Meta } from '@storybook/react'

import Category from '.'

export default {
  component: Category,
  title: 'Category',
} as Meta

export const Basic: Story = () => <Category />
