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
        <GenreButton text='Action' />
        <GenreButton text='Adventure' />
        <GenreButton text='Animation' />
        <GenreButton text='Comedy' />
        <GenreButton text='Crime' />
        <GenreButton text='Documentary' />
        <GenreButton text='Drama' />
        <GenreButton text='Family' />
        <GenreButton text='Fantasy' />
        <GenreButton text='History' />
        <GenreButton text='Horror' />
        <GenreButton text='Music' />
        <GenreButton text='Mystery' />
        <GenreButton text='Romance' />
      </div>
    </div>
  )
}

export default MoviesFilter
