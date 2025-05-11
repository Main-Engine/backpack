import React from 'react'

type PageContextState = {
  navHeight: number
  setNavHeight: (value: number) => void
  pageHeight: number
  tabBarPageHeight: number
}
declare const PageProvider: ({
  children
}: {
  children: React.ReactNode
}) => import('react/jsx-runtime').JSX.Element
declare const usePage: () => PageContextState
export { PageProvider, usePage }
