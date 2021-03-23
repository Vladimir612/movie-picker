import React, { useContext, useEffect } from 'react'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext)
}

export const MoviesProvider = ({ children }) => {
  // const [movies, setMovies] = useState([])

  const fetchPopularMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d09a7a4574bfd3fe9cb9058dfbe63d4&page=1'
    )
      .then((response) => response.json())
      .then((data) => console.log(data.results))
  }

  useEffect(() => {
    fetchPopularMovies()
  }, [])
  const movie = 'Catch me if you can'
  return (
    <MoviesContext.Provider value={{ movie }}>
      {children}
    </MoviesContext.Provider>
  )
}
