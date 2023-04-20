import styled, { css } from 'styled-components'

type Props = {
  isActive: boolean
}

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

export const ContainerImage = styled.div`
  width: 90px;
  height: 60px;
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

export const Border = styled.div<Props>`
  ${({ theme, isActive }) => css`
    width: 70%;
    height: 2px;
    background-color: ${isActive && theme.colors.background[900]};
  `}
`
