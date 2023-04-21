import { GiArmoredBoomerang } from 'react-icons/gi'
import styled, { DefaultTheme, css } from 'styled-components'

type Props = {
  isActive?: boolean
  modify?: boolean
}

const modifiers = {
  seeMore: (theme: DefaultTheme) => css`
    border: 3px solid ${theme.colors.text[900]};
    border-radius: ${theme.radius.md};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export const IconSeeMore = styled(GiArmoredBoomerang).attrs({
  size: 18,
})<Props>`
  ${({ theme, isActive }) => css`
    color: ${theme.colors.text[900]};
    transform: ${isActive && 'rotate(90deg)'};
    transition: ${theme.transitions.bounce};
  `}
`

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
`

export const ContainerImage = styled.div<Props>`
  ${({ theme, modify }) => css`
    width: 90px;
    height: 60px;
    ${modify && modifiers.seeMore(theme)}
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text[900]};
    font-size: ${theme.font.sizes.small};
  `}
`

export const BorderBotton = styled.div<Props>`
  ${({ theme, isActive }) => css`
    width: 70%;
    height: 2px;
    transform: ${isActive && 'scaleX(-1)'};
    transition: ${theme.transitions.bounce};
    background-color: ${isActive && theme.colors.background[900]};
  `}
`
