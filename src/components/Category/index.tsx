import { useState } from 'react'
import * as S from './styles'

export type CategoryProps = {
  title?: string
  img?: string
  alt?: string
  seeMore?: boolean
  onClick?: () => void
}

const Category = ({
  seeMore = false,
  alt,
  onClick,
  title,
  img,
}: CategoryProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    onClick && onClick()
    setIsClicked(!isClicked)
  }

  return (
    <S.Wrapper aria-label="button" onClick={handleClick}>
      <S.ContainerImage modify={seeMore}>
        {!seeMore ? (
          <S.Image src={img} alt={alt} />
        ) : (
          <S.IconSeeMore isActive={isClicked} />
        )}
      </S.ContainerImage>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.BorderBotton isActive={isClicked} />
      </S.ContainerTitle>
    </S.Wrapper>
  )
}

export default Category
