import React, { useContext, useState } from 'react'

const ScrollContext = React.createContext()

export const useScroll = () => {
  return useContext(ScrollContext)
}

export const ScrollProvider = ({ children }) => {
  const [shouldScroll, setShouldScroll] = useState(false)
  return (
    <ScrollContext.Provider value={{ shouldScroll, setShouldScroll }}>
      {children}
    </ScrollContext.Provider>
  )
}
