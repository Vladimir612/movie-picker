import React from 'react'
import GenreButton from '../SubComponents/GenreButton'
import SearchBar from '../SubComponents/SearchBar'
import './movies-filter.sass'

const MoviesFilter = () => {
  return (
    <div className='movies-filter'>
      <div className='search-movie'>
        <SearchBar text='Enter the movie...' />
      </div>
      <div className='genres'>
        <GenreButton text='melodrama' />
        <GenreButton text='thriller' />
        <GenreButton text='comedy' />
        <GenreButton text='horror' />
        <GenreButton text='action' />
      </div>
    </div>
  )
}

export default MoviesFilter
