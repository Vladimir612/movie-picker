import React from 'react'
import { useGenres } from '../../data/GenresContext'
import GenreButton from '../SubComponents/GenreButton'
import SearchBar from '../SubComponents/SearchBar'
import './movies-filter.sass'

const MoviesFilter = () => {
  const { genres } = useGenres()

  return (
    <div className='movies-filter'>
      <div className='search-movie'>
        <SearchBar text='Enter the movie...' />
      </div>
      <div className='genres'>
        {genres.map((genre) => {
          return <GenreButton key={genre.id} text={genre.name} />
        })}
      </div>
    </div>
  )
}

export default MoviesFilter
