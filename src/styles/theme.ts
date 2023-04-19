const PROJECT_CONFIG = {
  transitions: {
    ease_in_out: 'all 0.1s ease-in-out',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    slow_start: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    slow_end: 'all 0.5s cubic-bezier(0.43, 0, 0.72, 1)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  radius: {
    md: '8px',
    sm: '4px',
  },
  font: {
    family: "'Inter', sans-serif",
    normal: 500,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
} as const

const DARK_THEME = {
  text: {
    100: '#FCFCFD',
    200: '#F2F2F2',
    300: '#D8D8D8',
    400: '#BEBEBE',
    500: '#A2A2A2',
    600: '#8C8C8C',
    700: '#6E6E6E',
    800: '#4F4F4F',
    900: '#333333',
  },
  background: {
    900: '#181818',
    800: '#1E1E1E',
    700: '#2C2C2C',
    600: '#3A3A3A',
    500: '#484848',
    400: '#6E6E6E',
    300: '#8C8C8C',
    200: '#B4B4B4',
    100: '#D2D2D2',
  },
  error: {
    100: '#DD2626',
    200: '#662020',
  },
  success: {
    100: '#43AB65',
    200: '#22442C',
  },
  warning: {
    100: '#F0B23A',
    200: '#4B3C1D',
  },
} as const

const LIGHT_THEME = {
  text: {
    100: '#333333',
    200: '#4F4F4F',
    300: '#6E6E6E',
    400: '#8C8C8C',
    500: '#A2A2A2',
    600: '#BEBEBE',
    700: '#D8D8D8',
    800: '#F2F2F2',
    900: '#FCFCFD',
  },
  habit: {
    red: { 500: '#DD2626', 600: '#662020' },
    green: { 500: '#43AB65', 600: '#22442C' },
    orange: { 500: '#F0B23A', 600: '#4B3C1D' },
    default: { 500: '#484848', 600: '#3A3A3A' },
  },
  background: {
    100: '#FCFCFD',
    200: '#F2F2F2',
    300: '#D8D8D8',
    400: '#B4B4B4',
    500: '#8C8C8C',
    600: '#eeeeee',
    700: '#484848',
    800: '#333333',
    900: '#181818',
  },
  error: {
    100: '#DD2626',
    200: '#662020',
  },
  success: {
    100: '#43AB65',
    200: '#22442C',
  },
  warning: {
    100: '#F0B23A',
    200: '#4B3C1D',
  },
} as const

export const LIGHT = {
  colors: LIGHT_THEME,
  ...PROJECT_CONFIG,
} as const

export const DARK = {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const

export default {
  colors: DARK_THEME,
  ...PROJECT_CONFIG,
} as const
