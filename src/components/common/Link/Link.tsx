import { Link as ExpoLink } from 'expo-router'

export const Link = (
  props: Omit<React.ComponentProps<typeof ExpoLink>, 'href'> & { href: string }
) => {
  return <ExpoLink {...props} href={props.href} />
}
