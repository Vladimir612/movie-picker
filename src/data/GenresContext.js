import React, { useContext, useEffect, useState } from 'react'
import { genreUrl } from './apiURL'

const GenresContext = React.createContext()

export const useGenres = () => {
  return useContext(GenresContext)
}

export const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([])
  const fetchGenres = () => {
    fetch(genreUrl)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <GenresContext.Provider value={{ genres }}>
      {children}
    </GenresContext.Provider>
  )
}
