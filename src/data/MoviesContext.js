import React, { useContext, useEffect, useState } from 'react'
import {
  imageUrl,
  movieOnGenreUrl,
  movieOnKeywordUrl,
  popularMoviesUrl,
} from './apiURL'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext)
}

export const MoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [activeGenre, setActiveGenre] = useState('')

  const formatMovies = (movies) => {
    let tempMovies = movies.map((movie) => {
      let formattedMovie = {
        id: movie.id,
        movieTitle: movie.title,
        frontImage: movie.poster_path && imageUrl + movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date,
      }
      return formattedMovie
    })
    return tempMovies
  }

  const fetchPopularMovies = () => {
    setLoading(true)
    fetch(popularMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(formatMovies(data.results))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  const fetchMoviesBasedOnKeyword = (keyword) => {
    setLoading(true)
    let finalUrl = movieOnKeywordUrl + keyword
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(formatMovies(data.results))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  const fetchMoviesBasedOnGenre = (genreId) => {
    setActiveGenre(genreId)
    setLoading(true)
    let finalUrl = movieOnGenreUrl + genreId
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(formatMovies(data.results))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  useEffect(() => {
    fetchPopularMovies()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoviesContext.Provider
      value={{
        loading,
        movies,
        fetchMoviesBasedOnKeyword,
        fetchMoviesBasedOnGenre,
        activeGenre,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
