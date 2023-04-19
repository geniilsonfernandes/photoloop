import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import Category from '.'

describe('<Category />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Category />)

    expect(
      screen.getByRole('heading', { name: /Category/i }),
    ).toBeInTheDocument()
  })
})
