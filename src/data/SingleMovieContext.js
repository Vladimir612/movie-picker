import React, { useContext, useState } from 'react'
import { imageUrl } from './apiURL'

const SingleMovieContext = React.createContext()

export const useSingleMovie = () => {
  return useContext(SingleMovieContext)
}

export const SingleMovieProvider = ({ children }) => {
  const [singleMovie, setSingleMovie] = useState({})

  const formatSingleMovie = (singleMovie) => {
    let genres = singleMovie.genres.map((genre) => {
      return genre.name
    })
    let formattedMovie = {
      id: singleMovie.id,
      movieTitle: singleMovie.title,
      frontImage: imageUrl + singleMovie.poster_path,
      backImage: imageUrl + singleMovie.backdrop_path,
      genres: genres,
      overview: singleMovie.overview,
      homepage: singleMovie.homepage,
      runTime: singleMovie.runtime,
      status: singleMovie.status,
    }
    return formattedMovie
  }

  const getSingleMovie = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSingleMovie(formatSingleMovie(data))
      })
  }

  return (
    <SingleMovieContext.Provider value={{ getSingleMovie, singleMovie }}>
      {children}
    </SingleMovieContext.Provider>
  )
}
