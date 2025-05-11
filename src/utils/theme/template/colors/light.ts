import { palette } from 'utils/constants'
import { base } from './base'

export const light = {
  ...base,
  primary: {
    base: palette.mintGreen,
    foreground: palette.whiteSmoke
  },
  secondary: {
    base: palette.tan,
    foreground: palette.slate
  },

  tertiary: {
    base: palette.whiteSmoke,
    foreground: palette.slate
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
  }
}
