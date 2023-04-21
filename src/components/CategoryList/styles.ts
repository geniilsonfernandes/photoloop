import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

type ContainerDrawerProps = {
  isOpen: boolean
  rows?: number
}

type Drawer = {
  colums?: number
}

export const Categories = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ContainerDrawer = styled.div<ContainerDrawerProps>`
  ${({ isOpen, theme, rows = 1 }) => css`
    display: flex;
    justify-content: start;
    transition: ${theme.transitions.slow_end};

    height: ${isOpen ? `${(100 + 16) * rows}px` : '0px'};
    overflow: hidden;
    margin: ${theme.spacings.xsmall} 0;
  `}
`
export const Drawer = styled.div<Drawer>`
  ${({ colums = 6 }) => css`
    display: grid;
    grid-template-columns: repeat(${colums}, 1fr);
    grid-template-rows: repeat(2, 100px);
    align-items: flex-start;
    gap: 16px;
  `}
`
