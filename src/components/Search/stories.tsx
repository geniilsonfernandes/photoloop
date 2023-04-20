import { Story, Meta } from '@storybook/react'

import Search, { SearchProps } from '.'

export default {
  component: Search,
  title: 'Search',
  args: {
    placeholder: 'Search',
  },
} as Meta<SearchProps>

export const Basic: Story<SearchProps> = (arg) => <Search {...arg} />
