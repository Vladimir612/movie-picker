import React, { useContext, useEffect, useState } from 'react'
import { imageUrl, trendingActors } from './apiURL'

const ActorsContext = React.createContext()

export const useActors = () => {
  return useContext(ActorsContext)
}

export const ActorsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [actors, setActors] = useState([])

  const formatActors = (actors) => {
    let tempActors = actors.map((actor) => {
      let formattedActor = {
        id: actor.id,
        actorName: actor.name,
        frontImage: actor.profile_path && imageUrl + actor.profile_path,
      }
      return formattedActor
    })
    return tempActors
  }

  const fetchPopularActors = () => {
    setLoading(true)
    fetch(trendingActors)
      .then((response) => response.json())
      .then((data) => {
        setActors(formatActors(data.results))
      })
      .then(
        //just a little pause so with fast internet doesnt look like a flash
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      )
  }

  useEffect(() => {
    fetchPopularActors()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ActorsContext.Provider
      value={{
        loading,
        actors,
      }}
    >
      {children}
    </ActorsContext.Provider>
  )
}
