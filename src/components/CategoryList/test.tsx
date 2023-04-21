import renderWithTheme from '../../utils/renderWithTheme'
import CategoryList from '.'

describe('<CategoryList />', () => {
  it('deve renderizar o componente corretamente', () => {
    renderWithTheme(<CategoryList />)
  })

  it.todo('deve mostrar 4 categorias')
  // dica: ver se tem quatro categorias

  it('deve clicar no botão de ver mais e mostrar mais categorias')
  // dica: verificar se o botão de ver mais está visível e clicar nele
  // dica: verificar se o atributo aria-expanded está true / containerDrawer
  // dica: verificar se o atributo aria-expanded está false quando clicar novamente
  // dica: verificar se a categoria do drawer está visível e com o atributo aria-hidden false

  it.todo('deve clicar em uma categoria do drawer e fechar o drawer')
  // dica: verificar se o atributo aria-expanded está true
  // dica: verificar se o atributo aria-expanded está false quando clicar novamente
  // dica: verificar se a categoria do drawer está visível e com o atributo aria-hidden false
})
