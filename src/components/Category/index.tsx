import * as S from './styles'

export type CategoryProps = {
  title?: string
  img?: string
  alt?: string
  seeMore?: boolean
  onClick?: () => void
  active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Category = ({
  seeMore = false,
  alt,
  onClick,
  title,
  img,
  active = false,
  ...rest
}: CategoryProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <S.Wrapper
      aria-label={seeMore ? 'Ver mais' : title}
      onClick={handleClick}
      {...rest}
    >
      <S.ContainerImage modify={seeMore}>
        {!seeMore ? (
          <S.Image src={img} alt={alt} />
        ) : (
          <S.IconSeeMore is_active={active.toString()} />
        )}
      </S.ContainerImage>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.BorderBotton is_active={seeMore ? 'false' : active.toString()} />
      </S.ContainerTitle>
    </S.Wrapper>
  )
}

export default Category
