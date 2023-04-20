import styled, { css } from 'styled-components'

export const Wrapper = styled.input`
  ${({ theme }) => css`
    text-align: center;
    padding: 6px;
    background-color: ${theme.colors.background[100]};
    border: none;
    border-radius: 6px;
    width: 276px;
    color: ${theme.colors.text[900]};
    font-size: ${theme.font.sizes.small};
    ::placeholder {
      color: ${theme.colors.text[400]};
    }
  `}
`
