import { Link as ExpoLink } from 'expo-router'

export declare const Link: (
  props: Omit<React.ComponentProps<typeof ExpoLink>, 'href'> & {
    href: string
  }
) => import('react/jsx-runtime').JSX.Element
