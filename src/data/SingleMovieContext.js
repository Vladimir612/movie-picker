import React, { useContext, useState } from 'react'
import { backImageUrl, imageUrl } from './apiURL'

const SingleMovieContext = React.createContext()

export const useSingleMovie = () => {
  return useContext(SingleMovieContext)
}

export const SingleMovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [singleMovie, setSingleMovie] = useState({})

  const formatSingleMovie = (singleMovie) => {
    let genres = singleMovie.genres.map((genre) => {
      return genre.name
    })
    let formattedMovie = {
      id: singleMovie.id,
      movieTitle: singleMovie.title,
      frontImage: singleMovie.poster_path && imageUrl + singleMovie.poster_path,
      backImage:
        singleMovie.backdrop_path && backImageUrl + singleMovie.backdrop_path,
      genres: genres,
      overview: singleMovie.overview,
      homepage: singleMovie.homepage,
      runTime: singleMovie.runtime,
      status: singleMovie.status,
    }
    return formattedMovie
  }

  const getSingleMovie = (url) => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSingleMovie(formatSingleMovie(data))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
      .catch((error) => console.log(error))
  }

  return (
    <SingleMovieContext.Provider
      value={{ getSingleMovie, singleMovie, loading }}
    >
      {children}
    </SingleMovieContext.Provider>
  )
}
