import React, { createContext, useContext, useMemo, useState } from 'react'

import { useWindow } from 'contexts/window'

type PageContextState = {
  navHeight: number
  setNavHeight: (value: number) => void
  pageHeight: number
  tabBarPageHeight: number
}

const PageContext = createContext({} as PageContextState)

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const { dimensions } = useWindow()
  const [navHeight, setNavHeight] = useState<number>(74)

  const value = useMemo(() => {
    return {
      navHeight,
      setNavHeight,

      pageHeight: dimensions.height,
      tabBarPageHeight: dimensions.height - navHeight
    }
  }, [dimensions.height, navHeight])

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

const usePage = () => {
  const pageContext = useContext(PageContext)
  if (PageContext == null) {
    throw new Error('usePage() called outside of a PageProvider?')
  }
  return pageContext
}

export { PageProvider, usePage }
