import { color, size } from './template'

export type BreakpointArray = [number, number, number, number, number, number, number]
export type BreakpointSizeMatrix = {
  [key in size.Size]: BreakpointArray
}
export declare const theme: ({
  userOptions,
  breakpointIndex
}: {
  userOptions: {
    themeColor: color.ColorKey
  }
  breakpointIndex: number
}) => {
  maxWidth: number
  images:
    | {
        logoHorizontal: {
          primary: any
          secondary: any
        }
        logoSquare: {
          primary: any
          secondary: any
        }
      }
    | {
        logoHorizontal: {
          primary: any
          secondary: any
        }
        logoSquare: {
          primary: any
          secondary: any
        }
      }
    | {
        logoHorizontal: {
          primary: any
          secondary: any
        }
        logoSquare: {
          primary: any
          secondary: any
        }
      }
    | {
        logoHorizontal: {
          primary: any
          secondary: any
        }
        logoSquare: {
          primary: any
          secondary: any
        }
      }
  breakpoints: {
    lg: number
    md: number
    sm: number
    xl: number
    xs: number
    xxl: number
  }
  shadow: {
    base: {
      none: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: color.ColorObject
        shadowOffset: string
      }
      xxs: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      xs: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      sm: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      md: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      lg: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      xl: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
      xxl: {
        shadowOpacity: number
        shadowRadius: number
        shadowColor: string
        shadowOffset: string
      }
    }
  }
  space: {
    base: {
      none: number
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
  radius: {
    base: {
      none: number
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
  color: {
    transparent: color.ColorObject
    base: color.ColorObject
    primary: color.ColorObject
    secondary: color.ColorObject
    tertiary: color.ColorObject
    quaternary: color.ColorObject
    quinary: color.ColorObject
    senary: color.ColorObject
    septenary: color.ColorObject
    danger: color.ColorObject
    warning: color.ColorObject
    info: color.ColorObject
    inverse: color.ColorObject
    contrast: color.ColorObject
    white: color.ColorObject
    black: color.ColorObject
    transparentFlip: color.ColorObject
    baseFlip: color.ColorObject
    primaryFlip: color.ColorObject
    secondaryFlip: color.ColorObject
    tertiaryFlip: color.ColorObject
    quaternaryFlip: color.ColorObject
    quinaryFlip: color.ColorObject
    senaryFlip: color.ColorObject
    septenaryFlip: color.ColorObject
    dangerFlip: color.ColorObject
    warningFlip: color.ColorObject
    infoFlip: color.ColorObject
    inverseFlip: color.ColorObject
    contrastFlip: color.ColorObject
    whiteFlip: color.ColorObject
    blackFlip: color.ColorObject
    transparent0: color.ColorObject
    transparent60: color.ColorObject
    transparent100: color.ColorObject
    transparent20: color.ColorObject
    transparent30: color.ColorObject
    transparent40: color.ColorObject
    transparent50: color.ColorObject
    transparent10: color.ColorObject
    transparent70: color.ColorObject
    transparent80: color.ColorObject
    transparent90: color.ColorObject
    transparentLight0: color.ColorObject
    transparentLight60: color.ColorObject
    transparentLight100: color.ColorObject
    transparentLight20: color.ColorObject
    transparentLight30: color.ColorObject
    transparentLight40: color.ColorObject
    transparentLight50: color.ColorObject
    transparentLight10: color.ColorObject
    transparentLight70: color.ColorObject
    transparentLight80: color.ColorObject
    transparentLight90: color.ColorObject
  }
  size: {
    border: {
      none: number
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
    font: {
      none: number
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
    avatar: {
      none: number
      xxs: number
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
  typography: {
    family: {
      text: {
        body: {
          normal: {
            name: string
            weight: number
          }
          medium: {
            name: string
            weight: number
          }
          bold: {
            name: string
            weight: number
          }
        }
        heading: {
          normal: {
            name: string
            weight: number
          }
          medium: {
            name: string
            weight: number
          }
          bold: {
            name: string
            weight: number
          }
        }
        hand: {
          normal: {
            name: string
            weight: number
          }
          medium: {
            name: string
            weight: number
          }
          bold: {
            name: string
            weight: number
          }
        }
      }
      icon: {
        fontAwesome: {
          thin: {
            name: string
            weight: number
          }
          light: {
            name: string
            weight: number
          }
          regular: {
            name: string
            weight: number
          }
          solid: {
            name: string
            weight: number
          }
        }
        fontAwesomeBrands: {
          regular: {
            name: string
            weight: number
          }
        }
      }
    }
    weight: {
      thin: number
      extraLight: number
      light: number
      normal: number
      medium: number
      semiBold: number
      bold: number
    }
  }
  _state: {
    breakpoint: 'none' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    themeColor: color.ColorKey
  }
}
