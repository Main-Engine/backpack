import { palette } from 'utils/constants'

export const base = {
  primary: {
    base: palette.forestGreen,
    foreground: palette.bisque
  },
  secondary: {
    base: palette.orange,
    foreground: palette.whiteSmoke
  },
  tertiary: {
    base: palette.mintGreen,
    foreground: palette.bisque
  },
  quaternary: {
    base: palette.forestGreen,
    foreground: palette.white
  },

  quinary: {
    base: palette.white,
    foreground: palette.mintGreen
  },

  senary: {
    base: palette.bisque,
    foreground: palette.orange
  },

  // Used for page background with readable text
  septenary: {
    base: palette.lightOrange,
    foreground: palette.coolGrey
  },

  // Used for error, warning, and info messages
  danger: {
    base: palette.chileanFire,
    foreground: palette.white
  },
  warning: {
    base: palette.tangerineYellow,
    foreground: palette.white
  },
  info: {
    base: palette.dodgerBlue,
    foreground: palette.white
  },

  /* 
    The Base & Inverse colors are either a black or white shade, inverse is the oposite
    Commonly used for the background of the page
  */
  base: {
    base: palette.whiteSmoke,
    foreground: palette.slate
  },
  inverse: {
    base: palette.slate,
    foreground: palette.whiteSmoke
  },

  contrast: {
    base: palette.white,
    foreground: palette.black
  },

  transparent: '#00000000',
  white: {
    base: palette.white,
    foreground: palette.black
  },
  black: {
    base: palette.black,
    foreground: palette.white
  }
}
