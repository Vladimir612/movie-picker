import React, { useContext, useEffect, useState } from 'react'
import { imageUrl, popularMoviesUrl } from './apiURL'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext)
}

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const formatMovies = (movies) => {
    let tempMovies = movies.map((movie) => {
      let formattedMovie = {
        id: movie.id,
        movieTitle: movie.title,
        frontImage: imageUrl + movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date,
      }
      return formattedMovie
    })
    return tempMovies
  }

  const fetchPopularMovies = () => {
    fetch(popularMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(formatMovies(data.results))
      })
  }

  useEffect(() => {
    fetchPopularMovies()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  )
}
