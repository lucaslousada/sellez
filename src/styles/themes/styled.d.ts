import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      main: string

      color_100: string
      color_200: string
      color_300: string
      color_400: string
      color_600: string
      color_700: string
      color_800: string
      color_900: string

      transparent_color_100: string
      transparent_color_200: string

      green: string
      red: string
    }

    transitions: {
      default: string
    }
  }
}
