import { screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import Search from '.'
import renderWithTheme from '../../utils/renderWithTheme'

const props = { placeholder: 'Search' }

const function_mock = jest.fn()

describe('<Search />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Search placeholder={props.placeholder} />)

    const inputSearch = screen.getByPlaceholderText(props.placeholder)

    expect(inputSearch).toBeInTheDocument()
  })

  it('should get the input value', async () => {
    renderWithTheme(
      <Search placeholder={props.placeholder} onChange={function_mock} />
    )
    const inputSearch = screen.getByPlaceholderText(props.placeholder)

    await useEvent.type(inputSearch, 'name')

    expect(inputSearch).toHaveValue('name')
    expect(function_mock).toBeCalledTimes(4)
  })
})
