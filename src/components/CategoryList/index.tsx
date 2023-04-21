import Category from 'components/Category'
import useModal from 'hook/useModal'
import { useState } from 'react'
import * as S from './styles'

const categories = [
  {
    id: 1,
    title: 'Todas',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Todas',
    seeMore: false,
  },
  {
    id: 2,
    title: 'Tecnologia',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Tecnologia',
    seeMore: false,
  },
  {
    id: 3,
    title: 'Moda',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Moda',
    seeMore: false,
  },
  {
    id: 5,
    title: 'Ver mais',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Ver mais',
    seeMore: true,
  },
]

const categoriesDrawer = [
  {
    id: 1342,
    title: 'Todas',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Todas',
    seeMore: false,
  },
  {
    id: 243,
    title: 'Tecnologia',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Tecnologia',
    seeMore: false,
  },
  {
    id: 343,
    title: 'Moda',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Moda',
    seeMore: false,
  },
  {
    id: 431,
    title: 'Casa',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Casa',
    seeMore: false,
  },
  {
    id: 131,
    title: 'Todas',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Todas',
    seeMore: false,
  },
  {
    id: 312,
    title: 'Tecnologia',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Tecnologia',
    seeMore: false,
  },
  {
    id: 3321,
    title: 'Moda',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Moda',
    seeMore: false,
  },
  {
    id: 4231,
    title: 'Casa',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Casa',
    seeMore: false,
  },
  {
    id: 133,
    title: 'Todas',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Todas',
    seeMore: false,
  },
  {
    id: 23,
    title: 'Tecnologia',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Tecnologia',
    seeMore: false,
  },
  {
    id: 33,
    title: 'Moda',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Moda',
    seeMore: false,
  },
  {
    id: 431,
    title: 'Casa',
    img: 'https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg',
    alt: 'Casa',
    seeMore: false,
  },
].filter((category) => !category.seeMore)

const CategoryList = () => {
  const gridConfig = {
    colunms: 4,
    rows: categoriesDrawer.length / 4,
  }

  const drawer = useModal()
  const [activeCategory, setActiveCategory] = useState<number | null>(
    categories[0].id
  )

  const handleClick = (id: number) => {
    const isSeeMore = categories.find((category) => category.id === id)

    const isDrerwerItem = categoriesDrawer.find(
      (category) => category.id === id
    )

    if (isDrerwerItem) {
      drawer.close()
      setActiveCategory(id)
      return
    }

    if (isSeeMore?.seeMore) {
      setActiveCategory(id)
      drawer.open()
      if (activeCategory === id) {
        drawer.close()
        setActiveCategory(null)
      }
      return
    }

    setActiveCategory(id)
  }

  return (
    <S.Wrapper>
      <S.Categories>
        {categories.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            img={category.img}
            alt={category.alt}
            active={activeCategory === category.id}
            seeMore={category.seeMore}
            onClick={() => handleClick(category.id)}
          />
        ))}
      </S.Categories>
      <S.ContainerDrawer
        isOpen={drawer.isShowing}
        aria-expanded={drawer.isShowing ? 'false' : 'true'}
        rows={gridConfig.rows}
      >
        <S.Drawer colums={gridConfig.colunms}>
          {categoriesDrawer.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              img={category.img}
              alt={category.alt}
              active={activeCategory === category.id}
              onClick={() => handleClick(category.id)}
              aria-hidden={drawer.isShowing ? 'false' : 'true'}
            />
          ))}
        </S.Drawer>
      </S.ContainerDrawer>
    </S.Wrapper>
  )
}

export default CategoryList
