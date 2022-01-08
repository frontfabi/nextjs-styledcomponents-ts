const defaultTheme = {
  colors: {
    bg: '#fff',
    fg: '#49adaa',
    primary: '#49adaa',
    secondary: '#a48bc5',
  },
  functions: {
    toRem: (px: number) => `${px/16}rem`
  },
  fonts: {
    types: {
      title: 'Orbitron',
      body: 'Rubik',
    },  
    sizes: {
      xs: 10,
      sm: 14,
      default: 16,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    }
  }
}

export type ThemeType = typeof defaultTheme
export default defaultTheme