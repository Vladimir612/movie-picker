import React, { useContext, useEffect, useState } from 'react'
import {
  imageUrl,
  movieOnKeywordUrl,
  popularMoviesUrl,
  movieOnGenreUrl,
} from './apiURL'

const MoviesContext = React.createContext()

export const useMovies = () => {
  return useContext(MoviesContext)
}

export const MoviesProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  const changeSelectedGenres = (genreId) => {
    if (!selectedGenres.includes(genreId)) {
      setSelectedGenres([...selectedGenres, genreId])
    } else {
      let newArr = [...selectedGenres]
      let index = selectedGenres.indexOf(genreId)
      newArr.splice(index, 1)
      setSelectedGenres(newArr)
    }
  }

  useEffect(() => {
    fetchMoviesBasedOnGenre(selectedGenres)
  }, [selectedGenres]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoviesBasedOnGenre = (selectedGenres) => {
    let finalUrl = movieOnGenreUrl
    for (let i = 0; i < selectedGenres.length; i++) {
      finalUrl += selectedGenres[i] + '||'
    }
    setLoading(true)
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
    console.log(finalUrl)
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
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
        setSelectedGenres,
        selectedGenres,
        changeSelectedGenres,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
