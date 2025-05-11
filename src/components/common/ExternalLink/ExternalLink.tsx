import { Linking } from 'react-native'

import { Pressable } from 'common/Pressable'

import { Props } from './ExternalLink.types'

export const ExternalLink = ({ children, href, ...rest }: Props) => {
  const handlePress = () => {
    Linking.openURL(href)
  }

  return (
    <Pressable onPress={handlePress} {...rest}>
      {children}
    </Pressable>
  )
}
