import * as S from './styles'

export type CategoryProps = {
  title?: string
  img?: string
  onClick?: () => void
  isActived: boolean
  alt?: string
}

const Category = ({ alt, onClick, title, img, isActived }: CategoryProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <S.Wrapper aria-label="button" onClick={handleClick}>
      <S.ContainerImage>
        <S.Image src={img} alt={alt} />
      </S.ContainerImage>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.Border isActive={isActived} />
      </S.ContainerTitle>
    </S.Wrapper>
  )
}

export default Category
