import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: '#00428D',
    primaryHover: '#2C65A6',

    gray500: '#787885',
    gray200: '#D2D2D6',

    blue100: '#D8E6FF',
    input: '#98999B',

    success: '#15BA58',
    error: '#E73737',
    warning: '#FFC21F',

    background: '#F4F7FE',

    black: '#2C2C2C',
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles : {
    global : {
      body : {
        bg: '#F4F7FE',
        color: '#183B56',
      }
    }
  }
})

export default theme;