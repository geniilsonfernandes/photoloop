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
  ...props
}: CategoryProps) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <S.Wrapper
      aria-label={seeMore ? 'Ver mais' : title}
      onClick={handleClick}
      {...props}
    >
      <S.ContainerImage modify={seeMore}>
        {!seeMore ? (
          <S.Image src={img} alt={alt} />
        ) : (
          <S.IconSeeMore isActive={active} />
        )}
      </S.ContainerImage>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.BorderBotton isActive={seeMore ? false : active} />
      </S.ContainerTitle>
    </S.Wrapper>
  )
}

export default Category
