import * as S from './styles'

export type ButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonIcon = (prop: ButtonIconProps) => {
  return <S.Button {...prop}>{prop.children}</S.Button>
}

export default ButtonIcon
