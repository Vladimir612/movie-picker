import React, { useState, useEffect } from 'react'
import { useMovies } from '../../../data/MoviesContext'
import './search-bar.sass'

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('')
  let { text } = props

  const { fetchMoviesBasedOnKeyword } = useMovies()

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    searchText && fetchMoviesBasedOnKeyword(searchText)
  }, [searchText]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className='search-form'>
      <input
        type='text'
        placeholder={text}
        name='search'
        autoComplete='off'
        value={searchText}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchBar
