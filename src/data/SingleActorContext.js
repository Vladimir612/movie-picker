import React, { useContext, useState } from 'react'
import { imageUrl } from './apiURL'

const SingleActorContext = React.createContext()

export const useSingleActor = () => {
  return useContext(SingleActorContext)
}

export const SingleActorProvider = ({ children }) => {
  const [loadingMovies, setLoadingMovies] = useState(true)
  const [loadingData, setLoadingData] = useState(true)
  const [singleActorData, setSingleActorData] = useState({})
  const [singleActorMovies, setSingleActorMovies] = useState({})

  const formatSingleActorData = (singleActorData) => {
    let formattedActorData = {
      id: singleActorData.id,
      actorName: singleActorData.name,
      frontImage:
        singleActorData.profile_path && imageUrl + singleActorData.profile_path,
      biography: singleActorData.biography,
      job: singleActorData.known_for_department,
    }
    return formattedActorData
  }

  const formatSingleActorMovies = (singleActorMovies) => {
    let newArr = singleActorMovies.map((movie) => {
      let id = movie.id
      let movieTitle = movie.title
      let releaseDate = movie.release_date
      let overview = movie.overview
      let frontImage = movie.poster_path && imageUrl + movie.poster_path
      return { id, movieTitle, frontImage, overview, releaseDate }
    })
    return newArr
  }

  const getSingleActorData = (url) => {
    setLoadingData(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSingleActorData(formatSingleActorData(data))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoadingData(false)
        }, 1000)
      )
      .catch((error) => console.log(error))
  }

  const getSingleActorMovies = (url) => {
    setLoadingMovies(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSingleActorMovies(formatSingleActorMovies(data.cast.slice(0, 20)))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoadingMovies(false)
        }, 1000)
      )
      .catch((error) => console.log(error))
  }

  return (
    <SingleActorContext.Provider
      value={{
        getSingleActorData,
        getSingleActorMovies,
        loadingMovies,
        loadingData,
        singleActorData,
        singleActorMovies,
      }}
    >
      {children}
    </SingleActorContext.Provider>
  )
}
