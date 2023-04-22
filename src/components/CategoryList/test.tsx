import { screen } from '@testing-library/react'
import useEvent from '@testing-library/user-event'
import CategoryList from '.'
import renderWithTheme from '../../utils/renderWithTheme'

describe('<CategoryList />', () => {
  it('should render the component correctly', () => {
    renderWithTheme(<CategoryList />)

    const button = screen.getByRole('button', { name: 'Ver mais' })

    expect(button).toBeInTheDocument()
    // dica: verificar se o botão de ver mais está visível
  })

  it('must click on the see more button and show more categories', async () => {
    renderWithTheme(<CategoryList />)

    const button = screen.getByRole('button', { name: 'Ver mais' })
    const category = screen.getByLabelText('containerDrawer')

    expect(category).toBeInTheDocument()
    expect(category).toHaveAttribute('aria-expanded', 'true')
    // dica: verificar se o atributo aria-expanded está true / containerDrawer

    await useEvent.click(button)
    // dica: verificar se o botão de ver mais está clicando
    expect(category).toHaveAttribute('aria-expanded', 'false')
    // dica: verificar se o atributo aria-expanded está false quando clicar novamente
  })

  it('should show categories', async () => {
    renderWithTheme(<CategoryList />)
    // dica: ver se tem quatro categorias

    const category = screen.getAllByLabelText('categoryDrawer')
    category.forEach((c) => {
      expect(c).toHaveAttribute('aria-hidden', 'true')
    })
    expect(category).toHaveLength(12)

    const button = screen.getByRole('button', { name: 'Ver mais' })
    await useEvent.click(button)

    category.forEach((c) => {
      expect(c).toHaveAttribute('aria-hidden', 'false')
    })
    // dica: verificar se a categoria do drawer está visível e com o atributo aria-hidden false
  })

  it('must click on a drawer category and close the drawer', () => {
    renderWithTheme(<CategoryList />)

    const category = screen.getAllByLabelText('categoryDrawer')

    category.forEach(async (c) => {
      expect(c).toHaveAttribute('aria-hidden', 'true')
      await useEvent.click(c)
      expect(c).toHaveAttribute('aria-hidden', 'false')
    })
  })
})
