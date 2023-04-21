import { screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import Category from '.'
import renderWithTheme from '../../utils/renderWithTheme'
import theme from 'styles/theme'

const clicked = jest.fn()
const props = { title: 'Category', img: 'img.png', alt: 'caregory' }

describe('<Category />', () => {
  it('should call function when is clicked', async () => {
    renderWithTheme(<Category title={props.title} onClick={clicked} />)

    const button = screen.getByLabelText(props.title)

    await useEvent.click(button)

    expect(clicked).toBeCalled()
  })

  it('should be active styled ', async () => {
    renderWithTheme(<Category title={props.title} active={true} />)

    const title = screen.getByText(props.title)

    expect(title.nextSibling).toHaveStyle({
      backgroundColor: theme.colors.background[900],
    })
  })

  it('should render image with alt', () => {
    renderWithTheme(
      <Category title={props.title} img={props.img} alt={props.alt} />
    )

    const image = screen.getByRole('img', { name: props.alt })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', props.img)
    expect(image).toHaveAttribute('alt', props.alt)
  })

  it('should render variant button see more', () => {
    renderWithTheme(<Category title={props.title} seeMore={true} />)

    const icon = screen.getByLabelText('Ver mais')
    expect(icon).toBeInTheDocument()
  })
})
