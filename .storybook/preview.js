import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
export const parameters = {
  backgrounds: {
    default: 'photo-dark',
    values: [
      {
        name: 'photo-light',
        value: '#fff',
      },
      {
        name: 'photo-dark',
        value: '#181818',
      },
    ],
  },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
