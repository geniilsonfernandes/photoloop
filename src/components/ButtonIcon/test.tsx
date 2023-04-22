import { screen } from '@testing-library/react'
import renderWithTheme from '../../utils/renderWithTheme'
import ButtonIcon from '.'

describe('<ButtonIcon />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ButtonIcon>button</ButtonIcon>)

    expect(screen.getByRole('button', { name: 'button' })).toBeInTheDocument()
  })
})
