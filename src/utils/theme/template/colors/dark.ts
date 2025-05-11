import { palette } from 'utils/constants'
import { base } from './base'

export const dark = {
  ...base,
  primary: {
    base: palette.forestGreen,
    foreground: palette.whiteSmoke
  },
  secondary: {
    base: palette.coolGrey,
    foreground: palette.whiteSmoke
  },

  tertiary: {
    base: palette.slate,
    foreground: palette.whiteSmoke
  },
  quaternary: {
    base: palette.coolGrey,
    foreground: palette.whiteSmoke
  },

  // Used for page background with readable text
  septenary: {
    base: palette.darkSlate,
    foreground: palette.lightSlate
  },

  /* 
    The Base & Inverse colors are either a black or white shade, inverse is the oposite
    Commonly used for the background of the page
  */
  base: {
    base: palette.slate,
    foreground: palette.whiteSmoke
  },
  inverse: {
    base: palette.whiteSmoke,
    foreground: palette.slate
  },
  contrast: {
    base: palette.black,
    foreground: palette.white
  }
}
