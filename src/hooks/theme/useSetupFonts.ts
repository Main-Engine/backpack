import * as Font from 'expo-font'
import { useEffect } from 'react'
import { useFonts } from 'hooks/theme/useFonts'
import { fonts } from 'utils/constants'

export const useSetupFonts = () => {
  const preloadFontAwesome = async () => {
    await Font.loadAsync({
      [fonts.faProThin]: {
        uri: require(`../../../assets/fonts/fontawesome/FA6Pro-Thin-100.otf`),
        display: Font.FontDisplay.BLOCK
      }
    })
    await Font.loadAsync({
      [fonts.faProLight]: {
        uri: require(`../../../assets/fonts/fontawesome/FA6Pro-Light-300.otf`),
        display: Font.FontDisplay.BLOCK
      }
    })
    // Preload the glyphs
    await Font.loadAsync({
      [fonts.faProRegular]: {
        uri: require(`../../../assets/fonts/fontawesome/FA6Pro-Regular-400.otf`),
        display: Font.FontDisplay.BLOCK
      }
    })
    await Font.loadAsync({
      [fonts.faProSolid]: {
        uri: require(`../../../assets/fonts/fontawesome/FA6Pro-Solid-900.otf`),
        display: Font.FontDisplay.BLOCK
      }
    })
    await Font.loadAsync({
      [fonts.faBrandsRegular]: {
        uri: require(`../../../assets/fonts/fontawesome/FA6Brands-Regular-400.otf`),
        display: Font.FontDisplay.BLOCK
      }
    })
  }

  const [loaded, error] = useFonts({
    [fonts.headingFontBold]: require(`../../../assets/fonts/gtwalsheim/GTWalsheim-Bd.otf`),
    [fonts.paragraphFont]: require(`../../../assets/fonts/barlow/Barlow-Regular.ttf`),
    [fonts.paragraphFontMedium]: require(`../../../assets/fonts/barlow/Barlow-Medium.ttf`),
    [fonts.paragraphFontBold]: require(`../../../assets/fonts/barlow/Barlow-Bold.ttf`),
    [fonts.handFont]: require(`../../../assets/fonts/bradley/BradleyHand-Bold.otf`)
  })

  useEffect(() => {
    preloadFontAwesome()
  }, [])

  return [loaded, error]
}
